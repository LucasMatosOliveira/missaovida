import { useForm } from "react-hook-form";
import { UserLoginSchema, userLoginSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AppRoutes } from "@/commom/http/app-routes";

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

        if (response?.error){
            alert("Username ou senha incorretos");
            return
        }
        router.push(AppRoutes.Dashboard())
    };

    return {
        handleSalvar,
        formMethods
    };
}
