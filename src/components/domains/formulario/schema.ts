import { z } from "@/commom/form/pt-zod";

export const internosInsaltSchema = z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    cpf: z.string().optional(),
    naturalidade: z.string().optional(),
    rg: z.string().optional(),
    orgaoExpedidor: z.string().optional(),
    dataNascimento: z.coerce.date().optional(),
    etnia: z.string().optional(),
    filiacaoPai: z.string().optional(),
    mae: z.string().optional(),
    enderecoFamiliar: z.string().optional(),
    telefone: z.string().optional(),
    whatsapp: z.string().optional(),
    escolaridade: z.string().optional(),
    profissao: z.string().optional(),
    estadoCivil: z.string().optional(),
    temFamiliaApoio: z.string().optional(),
    nomeFamiliar: z.string().optional(),
    enderecoFamiliar2: z.string().optional(),
    quantosFilhos: z.number().optional(),
    nomesFilhos: z.string().optional(),
    pagaPensao: z.string().optional(),
    religiao: z.string().optional(),
    qualReligiao: z.string().optional(),
});

export type InternosInsaltSchema = z.infer<typeof internosInsaltSchema>;