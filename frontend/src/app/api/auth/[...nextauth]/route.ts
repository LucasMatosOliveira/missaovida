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
        },
    }
}

export async function hashAndComparePassword(password: string, serverPassword: string): Promise<boolean> {
    try {
        const hashedPassword = await bcrypt.hash(serverPassword, 10);
        const isMatch = await bcrypt.compare(password, hashedPassword);
        return isMatch;
    } catch (error) {
        return false;
    }
}

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST}


/**
 *
 *
 * async authorize(credentials, req) {
                try {

                    if (!credentials?.username || !credentials?.password) {
                        throw new Error('Credenciais ausentes');
                    }


                    const response = await fetch('http://189.126.111.132:8001/auth/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ username: credentials.username, password: credentials.password })
                    });

                    if (!response.ok) {
                        throw new Error('Falha na autenticação');
                    }

                    const data = await response.json();


                    return {
                        id: data.id,
                        token: data.token,
                        username: credentials.username,
                    };
                } catch (error) {
                    console.error('Erro durante a autorização:', error);
                    return null;
                }
            }
 */