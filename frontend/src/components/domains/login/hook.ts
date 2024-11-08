import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { getSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { jwtDecode } from 'jwt-decode';
import { AppRoutes } from "@/commom/http/app-routes";
import { UserLoginSchema, userLoginSchema } from "./schema";
import { setToken } from "@/store/login";

export function UseLoginPage() {
    const router = useRouter();

    const formMethods = useForm<UserLoginSchema>({
        resolver: zodResolver(userLoginSchema),
        mode: 'onChange'
    });

    const { reset, setError } = formMethods;

    const handleSalvar = async (data: UserLoginSchema) => {
        const response = await signIn('credentials', {
            username: data.username,
            password: data.password,
            redirect: false
        });

        console.log("Usuário autenticado:", response);

        if (response?.error) {
            console.log({ error: response.error })
            alert("Username ou senha incorretos");
            return;
        }
        const token = response?.ok ? (await getToken()) : null;

        if (token) {
            localStorage.setItem('token', token);
            setToken(token);
            router.push(AppRoutes.Dashboard());
        } else {
            console.error('Token não encontrado após autenticação');
            alert("Erro ao autenticar, tente novamente.");
        }

        // useEffect(() => {
        //     if(!token)
        //         return;

        //     setTimeout(() => {
        //         (async () => {
        //             localStorage.clear();
        //             await signOut({ callbackUrl: AppRoutes.Login() });
        //         })();
        //     }, 3600000)
        // }, [token]);

        // useEffect(() => {
        //     if (!token) return;

        //     const decoded = jwtDecode(token);
        //     const currentTime = Date.now() / 1000;
        //     const timeLeft = (decoded.exp! - currentTime) * 1000;

        //     const logoutTimer = setTimeout(async () => {
        //         localStorage.clear();
        //         await signOut({ callbackUrl: AppRoutes.Login() });
        //     }, timeLeft);

        //     return () => clearTimeout(logoutTimer);
        // }, [token]);
    };

    return {
        handleSalvar,
        formMethods
    };
}

async function getToken() {
    const session = await getSession();
    return session?.user?.token;
}
