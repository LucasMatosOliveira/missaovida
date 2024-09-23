import { z } from "@/commom/form/pt-zod";
import { booleanCoerce } from "@/commom/form/form-validation-utils";

export const filhoSchema = z.object({
    id: z.string(),
    nome: z.string().optional(),
    pagaPensao: booleanCoerce(z.boolean()).optional(),
});

export const internosInsaltSchema = z.object({
    id: z.string().optional(),
    name: z.string(),
    cpf: z.string(),
    naturalidade: z.string(),
    rg: z.string(),
    orgaoExpedidor: z.string(),
    dataNascimento: z.string(),
    etnia: z.string(),
    filiacaoPai: z.string(),
    mae: z.string(),
    enderecoFamiliar: z.string(),
    telefone: z.string(),
    whatsapp: z.string(),
    escolaridade: z.string(),
    profissao: z.string(),
    estadoCivil: z.string(),
    temFamiliaApoio: booleanCoerce(z.boolean()),
    nomeFamiliar: z.string(),
    enderecoFamiliarApoio: z.string(),
    filhos: z.array(filhoSchema),
    religiao: booleanCoerce(z.boolean()),
    qualReligiao: z.string(),

    tratamentoPsiquiatrico: booleanCoerce(z.boolean()),
    tratamentoPsiquiatricoLocal: z.string(),
    medicamentosPsicotropicos: booleanCoerce(z.boolean()),
    medicamentosPsicotropicosMotivo: z.string(),
    medicamentoUsoContinuo: booleanCoerce(z.boolean()),
    medicamentoUsoContinuoQual: z.string(),
    lesaoFisica: booleanCoerce(z.boolean()),
    lesaoFisicaMembro: z.string(),
    doencaRespiratoria: booleanCoerce(z.boolean()),
    doencaRespiratoriaTipo: z.string(),
    alergiaAlimentar: booleanCoerce(z.boolean()),
    alergiaAlimentarTipo: z.string(),
    alergiaMedicamento: booleanCoerce(z.boolean()),
    alergiaMedicamentoTipo: z.string(),
    doencas: booleanCoerce(z.boolean()),
    doencasQual: z.string(),
    doencaCoracao: booleanCoerce(z.boolean()),
    doencaCoracaoTipo: z.string(),
    tentouSuicidio: booleanCoerce(z.boolean()),
    autoMutilou: booleanCoerce(z.boolean()),
    historicoCancer: booleanCoerce(z.boolean()),
    historicoCancerTipo: z.string(),
    historicoCancerOrigem: z.string(),

    foiPreso: booleanCoerce(z.boolean()),
    foiPresoMotivo: z.string(),
    respondeProcesso: booleanCoerce(z.boolean()),
    respondeProcessoLocal: z.string(),
    tornozeleiraEletronica: booleanCoerce(z.boolean()),
    tornozeleiraEletronicaCentralMonitoramento: booleanCoerce(z.boolean()),
    cumpriuPena: booleanCoerce(z.boolean()),
    desacordoLei: booleanCoerce(z.boolean()),
    desacordoLeiMotivo: z.string(),

    alcool: booleanCoerce(z.boolean()),
    alcoolInformacoes: z.string(),
    tabaco: booleanCoerce(z.boolean()),
    tabacoInformacoes: z.string(),
    substancias: booleanCoerce(z.boolean()),
    substanciasMotivoUso: z.string(),
    substanciaMaiorUso: z.string(),

    situacaoRua: booleanCoerce(z.boolean()),
    situacaoRuaInformacoes: z.string(),
    chegadaMissaoVida: z.string(),
    chegadaMissaoVidaIgreja: z.string(),
    chegadaMissaoVidaSecretariaGov: z.string(),
    comoSente: z.string(),
    objetivosAcolhido: z.string(),
    outroCentroRecuperacao: booleanCoerce(z.boolean()),
    outroCentroRecuperacaoQual: z.string(),
    outroCentroRecuperacaoInformacoes: z.string(),

    autorizacaoGuardaDocumentos: booleanCoerce(z.boolean()),
    autorizacaoGuardaDocumentosQuais: z.string(),
    carteiraDocumentosAparencia: z.string(),
    valorMonetarioApresentado: z.string(),
    aparelhoCelularApresentado: z.string(),
    objetoValorApresentado: z.string(),

});

export type InternosInsaltSchema = z.infer<typeof internosInsaltSchema>;