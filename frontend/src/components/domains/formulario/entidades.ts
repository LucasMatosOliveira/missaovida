interface AcolhidoFilho {
    id: string;
    nome_filho: string;
    paga_pensao: boolean;
}

interface DadosSaude {
    tratamento_psiquiatrico: boolean;
    local_tratamento: string;
    medicamento_psicotropico: boolean;
    descricao_psicotropico: string;
    medicamento_uso_continuo: boolean;
    descricao_uso_continuo: string;
    lesao_fisica: boolean;
    local_lesao_fisica: string;
    doenca_respiratoria: boolean;
    nome_doenca_respiratoria: string;
    alergia_alimentar: boolean;
    nome_alimento: string;
    alergia_medicamentos: boolean;
    nome_alergia_medicamento: string;
    alguma_doenca: boolean;
    nome_doenca: string;
    problema_coracao: boolean;
    doenca_coracao: string;
    tem_cancer: boolean;
    historico_cancer: string;
    tipo_cancer: string;
    tentativa_suicidio: boolean;
    automutilacao: boolean;
}

interface VidaJuridica {
    historico_prisao: boolean;
    motivo_prisao: string;
    processos: boolean;
    localidade_processo: string;
    uso_tornozeleira: boolean;
    informou_central: boolean;
    situacao_legal: boolean;
    motivo_situacao_ilegal: string;
    cumpriu_pena: boolean;
}

interface Substancia {
    uso_alcool: boolean;
    motivo_alcool: string;
    uso_tabaco: boolean;
    motivo_tabaco: string;
    outras_substancias: boolean;
    principal_substancia: string;
    motivo_outras_substancias: string;
}

interface EstadoSocial {
    situacao_rua: boolean;
    motivos_rua: string;
    outros_centros: boolean;
    nome_outros_centros: string;
    motivo_saida_outros_centros: string;
    chegada_missao_vida: string;
    igreja: string;
    secretaria_governamental: string;
    sentimentos: string;
    objetivos: string;
}

interface TermoGuarda {
    autorizacao_guarda: boolean;
    documentos_guardados: string;
    descricao_carteira: string;
    recurso_especie: number;
    aparelho_celular: string;
    outros_objetos: string;
}

interface Interno {
    id: string;
    nome_acolhido: string;
    naturalidade: string;
    cpf_acolhido: string;
    rg_acolhido: string;
    orgao_expedidor_rg: string;
    data_nascimento: string;
    declaracao_racial: string;
    filiacao_pai: string;
    filiacao_mae: string;
    endereco_familiar: string;
    telefone: string;
    whatsapp: string;
    escolaridade_acolhido: string;
    profissao_acolhido: string;
    estado_civil_acolhido: string;
    apoio_familiar: boolean;
    nome_apoio: string;
    endereco_apoio: string;
    religiao_acolhido: boolean;
    qual_religiao: string;
    ativo: boolean;
    acolhidoFilhos: AcolhidoFilho[];
    dados_saude: DadosSaude;
    vida_juridica: VidaJuridica;
    substancia: Substancia;
    estado_social: EstadoSocial;
    termo_guarda: TermoGuarda;
}