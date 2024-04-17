import { z } from 'zod'

const InternoInput = z.object({
  nome: z.string(),
  cpf: z.string().max(14),
  idade: z.number(),
  escolaridade: z.string(),
  cidadeNatural: z.string(),
  estadoNatural: z.string(),
  etnia: z.string(),
});

export type InternoSchema = z.infer<typeof InternoInput>