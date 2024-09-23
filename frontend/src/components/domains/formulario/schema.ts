import { z } from "@/commom/form/pt-zod";
import { booleanCoerce } from "@/commom/form/form-validation-utils";

export const filhoSchema = z.object({
    id: z.string(),
    nome: z.string().optional(),
    pagaPensao: booleanCoerce(z.boolean()).optional(),
});

export const internosInsaltSchema = z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    cpf: z.string().optional(),
    naturalidade: z.string().optional(),
    rg: z.string().optional(),
    orgaoExpedidor: z.string().optional(),
    dataNascimento: z.string().optional(),
    etnia: z.string().optional(),
    filiacaoPai: z.string().optional(),
    mae: z.string().optional(),
    enderecoFamiliar: z.string().optional(),
    telefone: z.string().optional(),
    whatsapp: z.string().optional(),
    escolaridade: z.string().optional(),
    profissao: z.string().optional(),
    estadoCivil: z.string().optional(),
    temFamiliaApoio: booleanCoerce(z.boolean()).optional(),
    nomeFamiliar: z.string().optional(),
    enderecoFamiliarApoio: z.string().optional(),
    filhos: z.array(filhoSchema).optional(),
    religiao: booleanCoerce(z.boolean()).optional(),
    qualReligiao: z.string().optional(),

    tratamentoPsiquiatrico: booleanCoerce(z.boolean()).optional(),
    tratamentoPsiquiatricoLocal: z.string().optional(),
    medicamentosPsicotropicos: booleanCoerce(z.boolean()).optional(),
    medicamentosPsicotropicosMotivo: z.string().optional(),
    medicamentoUsoContinuo: booleanCoerce(z.boolean()).optional(),
    medicamentoUsoContinuoQual: z.string().optional(),
    lesaoFisica: booleanCoerce(z.boolean()).optional(),
    lesaoFisicaMembro: z.string().optional(),
    doencaRespiratoria: booleanCoerce(z.boolean()).optional(),
    doencaRespiratoriaTipo: z.string().optional(),
    alergiaAlimentar: booleanCoerce(z.boolean()).optional(),
    alergiaAlimentarTipo: z.string().optional(),
    alergiaMedicamento: booleanCoerce(z.boolean()).optional(),
    alergiaMedicamentoTipo: z.string().optional(),
    doencas: booleanCoerce(z.boolean()).optional(),
    doencasQual: z.string().optional(),
    doencaCoracao: booleanCoerce(z.boolean()).optional(),
    doencaCoracaoTipo: z.string().optional(),
    tentouSuicidio: booleanCoerce(z.boolean()).optional(),
    autoMutilou: booleanCoerce(z.boolean()).optional(),
    historicoCancer: booleanCoerce(z.boolean()).optional(),
    historicoCancerTipo: z.string().optional(),
    historicoCancerOrigem: z.string().optional(),

    foiPreso: booleanCoerce(z.boolean()).optional(),
    foiPresoMotivo: z.string().optional(),
    respondeProcesso: booleanCoerce(z.boolean()).optional(),
    respondeProcessoLocal: z.string().optional(),
    tornozeleiraEletronica: booleanCoerce(z.boolean()).optional(),
    tornozeleiraEletronicaCentralMonitoramento: booleanCoerce(z.boolean()).optional(),
    cumpriuPena: booleanCoerce(z.boolean()).optional(),
    desacordoLei: booleanCoerce(z.boolean()).optional(),
    desacordoLeiMotivo: z.string().optional(),

    alcool: booleanCoerce(z.boolean()).optional(),
    alcoolInformacoes: z.string().optional(),
    tabaco: booleanCoerce(z.boolean()).optional(),
    tabacoInformacoes: z.string().optional(),
    substancias: booleanCoerce(z.boolean()).optional(),
    substanciasMotivoUso: z.string().optional(),
    substanciaMaiorUso: z.string().optional(),

    situacaoRua: booleanCoerce(z.boolean()).optional(),
    situacaoRuaInformacoes: z.string().optional(),
    chegadaMissaoVida: z.string().optional(),
    chegadaMissaoVidaIgreja: z.string().optional(),
    chegadaMissaoVidaSecretariaGov: z.string().optional(),
    comoSente: z.string().optional(),
    objetivosAcolhido: z.string().optional(),
    outroCentroRecuperacao: booleanCoerce(z.boolean()).optional(),
    outroCentroRecuperacaoQual: z.string().optional(),
    outroCentroRecuperacaoInformacoes: z.string().optional(),

    autorizacaoGuardaDocumentos: booleanCoerce(z.boolean()).optional(),
    autorizacaoGuardaDocumentosQuais: z.string().optional(),
    carteiraDocumentosAparencia: z.string().optional(),
    valorMonetarioApresentado: z.string().optional(),
    aparelhoCelularApresentado: z.string().optional(),
    objetoValorApresentado: z.string().optional(),

});

export type InternosInsaltSchema = z.infer<typeof internosInsaltSchema>;