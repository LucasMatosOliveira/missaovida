import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaClient } from '@prisma/client';


const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

export const nextAuthOptions: NextAuthOptions = {
    providers: [
        Credentials({
            name: 'credentials',
            credentials: {
                username: { label: 'username', type: 'text' },
                password: { label: 'password', type: 'text' }
            },
            async authorize(credentials, req) {
                try {
                    const user = await prisma.user.findUnique({
                        where: {
                            username: credentials?.username,
                        },
                    });

                    if (!user) {
                        throw new Error('Usuário não encontrado');
                    }

                    const isMatch = await hashAndComparePassword(credentials?.password!, user.password);

                    if (!isMatch) {
                        throw new Error('Senha incorreta');
                    }

                    return {
                        id: user.id,
                        username: user.username
                    };
                } catch (error) {
                    console.error('Erro durante a autorização:', error);
                    return null;
                }

            }
        })
    ],
    pages: {
        signIn: '/dashboard'
    },
    callbacks: {
        async jwt({ token, user }){
            user && (token.user = user)
            return token
        },
        async session({ session, token }) {
            session.user = token.user as any
            return session
        }
    }
}

export async function hashAndComparePassword(password: string, serverPassword: string): Promise<boolean> {
    try {
        const hashedPassword = await bcrypt.hash(serverPassword, 10);
        console.log('Hash da senha:', hashedPassword);
        const isMatch = await bcrypt.compare(password, hashedPassword);
        console.log('As senhas correspondem:', isMatch);
        return isMatch;
    } catch (error) {
        console.error('Erro ao comparar senhas:', error);
        return false;
    }
}

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST}