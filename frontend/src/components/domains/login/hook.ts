import { useForm } from "react-hook-form";
import { UserLoginSchema, userLoginSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AppRoutes } from "@/commom/http/app-routes";
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
            alert("Username ou senha incorretos");
            return;
        }

        const loginData = {
            username: "string",
            password: "string"
        };

        try {
            const response = await fetch('http://189.126.111.132:8001/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Erro:', errorData);
                throw new Error('Erro na autenticação');
            }

            const data = await response.json();
            console.log({ data });
            setToken(data.token);

            router.push(AppRoutes.Dashboard());
        } catch (error) {
            console.error('Erro ao autenticar:', error);
        }
    };

    return {
        handleSalvar,
        formMethods
    };
}
