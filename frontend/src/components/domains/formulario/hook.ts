import { useForm } from "react-hook-form";
import { internosInsaltSchema, InternosInsaltSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

export function useInternosInsalt({ idInterno, onDadosSalvos}: InternosInsaltArgs) {
    const formMethods = useForm<InternosInsaltSchema>({
        resolver: zodResolver(internosInsaltSchema),
        mode:'onChange',
        defaultValues: {
            foiPreso: false
        }
    });

    return {
        formMethods
    };
}

export interface InternosInsaltArgs {
    idInterno?: string;
    onDadosSalvos?: (interno: any, isNovo: boolean) => void;
}