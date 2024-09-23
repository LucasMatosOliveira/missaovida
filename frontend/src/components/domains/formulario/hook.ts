import { useForm } from "react-hook-form";
import { internosInsaltSchema, InternosInsaltSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { InternosApi } from "./internos.api";
import { useSpinner } from "@/contexts/SpinnerContext";

export function useInternosInsalt({ idInterno, onDadosSalvos }: InternosInsaltArgs) {
    const formMethods = useForm<InternosInsaltSchema>({
        resolver: zodResolver(internosInsaltSchema),
        mode: 'onChange',
        defaultValues: {
            foiPreso: false
        }
    });

    const { showSpinner, hideSpinner} = useSpinner();

    const { reset } = formMethods;

    useEffect(() => {
        if (!idInterno)
            return;


        (async () => {
            try {
                showSpinner();
                const api = new InternosApi();
                const response = await api.getInternoPorId(idInterno);
                reset(mapTypeForSchema(response));
            }
            catch (error) {
                alert("Usuário não encontrado");
            }
            finally {
                hideSpinner();
            }
        })();

    }, [idInterno]);

    const handleSalvar = async (data: InternosInsaltSchema) => {
        const isNovo = !idInterno;

        const dados = mapSchemaForType(data);

        try {
            const api = new InternosApi()
            const response = isNovo
            ? await api.inserir(dados)
            : await api.alterar(idInterno, dados)
        }
        catch (error) {
            console.log(error);
        }
    }

    return {
        formMethods,
        handleSalvar
    };
}

const mapSchemaForType = (data: InternosInsaltSchema): Interno => {
    return {
        id: data.id!,
        nome_acolhido: data.name,
        naturalidade: data.naturalidade,
        cpf_acolhido: data.cpf,
        rg_acolhido: data.rg,
        orgao_expedidor_rg: data.orgaoExpedidor,
        data_nascimento: data.dataNascimento,
        declaracao_racial: data.etnia,
        filiacao_pai: data.filiacaoPai,
        filiacao_mae: data.mae,
        endereco_familiar: data.enderecoFamiliar,
        telefone: data.telefone,
        whatsapp: data.whatsapp,
        escolaridade_acolhido: data.escolaridade,
        profissao_acolhido: data.profissao,
        estado_civil_acolhido: data.estadoCivil,
        apoio_familiar: data.temFamiliaApoio,
        nome_apoio: data.nomeFamiliar,
        endereco_apoio: data.enderecoFamiliarApoio,
        religiao_acolhido: data.religiao,
        qual_religiao: data.qualReligiao,
        ativo: true,
        acolhidoFilhos: data.filhos.filter(filho => filho.nome)
            .map(filho => ({
                id: filho.id,
                nome_filho: filho.nome!,
                paga_pensao: filho.pagaPensao || false,
            })),
        dados_saude: {
            tratamento_psiquiatrico: data.tratamentoPsiquiatrico || false,
            local_tratamento: data.tratamentoPsiquiatricoLocal,
            medicamento_psicotropico: data.medicamentosPsicotropicos || false,
            descricao_psicotropico: data.medicamentosPsicotropicosMotivo,
            medicamento_uso_continuo: data.medicamentoUsoContinuo || false,
            descricao_uso_continuo: data.medicamentoUsoContinuoQual,
            lesao_fisica: data.lesaoFisica || false,
            local_lesao_fisica: data.lesaoFisicaMembro,
            doenca_respiratoria: data.doencaRespiratoria || false,
            nome_doenca_respiratoria: data.doencaRespiratoriaTipo,
            alergia_alimentar: data.alergiaAlimentar || false,
            nome_alimento: data.alergiaAlimentarTipo,
            alergia_medicamentos: data.alergiaMedicamento || false,
            nome_alergia_medicamento: data.alergiaMedicamentoTipo,
            alguma_doenca: data.doencas || false,
            nome_doenca: data.doencasQual,
            problema_coracao: data.doencaCoracao || false,
            doenca_coracao: data.doencaCoracaoTipo,
            tem_cancer: data.historicoCancer || false,
            historico_cancer: data.historicoCancerTipo,
            tipo_cancer: data.historicoCancerOrigem,
            tentativa_suicidio: data.tentouSuicidio || false,
            automutilacao: data.autoMutilou || false,
        },
        vida_juridica: {
            historico_prisao: data.foiPreso || false,
            motivo_prisao: data.foiPresoMotivo,
            processos: data.respondeProcesso || false,
            localidade_processo: data.respondeProcessoLocal,
            uso_tornozeleira: data.tornozeleiraEletronica || false,
            informou_central: data.tornozeleiraEletronicaCentralMonitoramento || false,
            situacao_legal: !data.desacordoLei,
            motivo_situacao_ilegal: data.desacordoLeiMotivo,
            cumpriu_pena: data.cumpriuPena || false,
        },
        substancia: {
            uso_alcool: data.alcool || false,
            motivo_alcool: data.alcoolInformacoes,
            uso_tabaco: data.tabaco || false,
            motivo_tabaco: data.tabacoInformacoes,
            outras_substancias: data.substancias || false,
            principal_substancia: data.substanciaMaiorUso,
            motivo_outras_substancias: data.substanciasMotivoUso,
        },
        estado_social: {
            situacao_rua: data.situacaoRua || false,
            motivos_rua: data.situacaoRuaInformacoes,
            outros_centros: data.outroCentroRecuperacao || false,
            nome_outros_centros: data.outroCentroRecuperacaoQual,
            motivo_saida_outros_centros: data.outroCentroRecuperacaoInformacoes,
            chegada_missao_vida: data.chegadaMissaoVida,
            igreja: data.chegadaMissaoVidaIgreja,
            secretaria_governamental: data.chegadaMissaoVidaSecretariaGov,
            sentimentos: data.comoSente,
            objetivos: data.objetivosAcolhido,
        },
        termo_guarda: {
            autorizacao_guarda: data.autorizacaoGuardaDocumentos || false,
            documentos_guardados: data.autorizacaoGuardaDocumentosQuais,
            descricao_carteira: data.carteiraDocumentosAparencia,
            recurso_especie: parseFloat(data.valorMonetarioApresentado) || 0,
            aparelho_celular: data.aparelhoCelularApresentado,
            outros_objetos: data.objetoValorApresentado,
        },
    };
};

const mapTypeForSchema = (data: Interno): InternosInsaltSchema => {
    return {
        id: data.id,
        name: data.nome_acolhido,
        naturalidade: data.naturalidade,
        cpf: data.cpf_acolhido,
        rg: data.rg_acolhido,
        orgaoExpedidor: data.orgao_expedidor_rg,
        dataNascimento: data.data_nascimento,
        etnia: data.declaracao_racial,
        filiacaoPai: data.filiacao_pai,
        mae: data.filiacao_mae,
        enderecoFamiliar: data.endereco_familiar,
        telefone: data.telefone,
        whatsapp: data.whatsapp,
        escolaridade: data.escolaridade_acolhido,
        profissao: data.profissao_acolhido,
        estadoCivil: data.estado_civil_acolhido,
        temFamiliaApoio: data.apoio_familiar,
        nomeFamiliar: data.nome_apoio,
        enderecoFamiliarApoio: data.endereco_apoio,
        filhos: data.acolhidoFilhos.map(filho => ({
            id: filho.id,
            nome: filho.nome_filho,
            pagaPensao: filho.paga_pensao,
        })),
        religiao: data.religiao_acolhido,
        qualReligiao: data.qual_religiao,

        tratamentoPsiquiatrico: data.dados_saude.tratamento_psiquiatrico,
        tratamentoPsiquiatricoLocal: data.dados_saude.local_tratamento,
        medicamentosPsicotropicos: data.dados_saude.medicamento_psicotropico,
        medicamentosPsicotropicosMotivo: data.dados_saude.descricao_psicotropico,
        medicamentoUsoContinuo: data.dados_saude.medicamento_uso_continuo,
        medicamentoUsoContinuoQual: data.dados_saude.descricao_uso_continuo,
        lesaoFisica: data.dados_saude.lesao_fisica,
        lesaoFisicaMembro: data.dados_saude.local_lesao_fisica,
        doencaRespiratoria: data.dados_saude.doenca_respiratoria,
        doencaRespiratoriaTipo: data.dados_saude.nome_doenca_respiratoria,
        alergiaAlimentar: data.dados_saude.alergia_alimentar,
        alergiaAlimentarTipo: data.dados_saude.nome_alimento,
        alergiaMedicamento: data.dados_saude.alergia_medicamentos,
        alergiaMedicamentoTipo: data.dados_saude.nome_alergia_medicamento,
        doencas: data.dados_saude.alguma_doenca,
        doencasQual: data.dados_saude.nome_doenca,
        doencaCoracao: data.dados_saude.problema_coracao,
        doencaCoracaoTipo: data.dados_saude.doenca_coracao,
        tentouSuicidio: data.dados_saude.tentativa_suicidio,
        autoMutilou: data.dados_saude.automutilacao,
        historicoCancer: data.dados_saude.tem_cancer,
        historicoCancerTipo: data.dados_saude.historico_cancer,
        historicoCancerOrigem: data.dados_saude.tipo_cancer,

        foiPreso: data.vida_juridica.historico_prisao,
        foiPresoMotivo: data.vida_juridica.motivo_prisao,
        respondeProcesso: data.vida_juridica.processos,
        respondeProcessoLocal: data.vida_juridica.localidade_processo,
        tornozeleiraEletronica: data.vida_juridica.uso_tornozeleira,
        tornozeleiraEletronicaCentralMonitoramento: data.vida_juridica.informou_central,
        cumpriuPena: data.vida_juridica.cumpriu_pena,
        desacordoLei: !data.vida_juridica.situacao_legal,
        desacordoLeiMotivo: data.vida_juridica.motivo_situacao_ilegal,

        alcool: data.substancia.uso_alcool,
        alcoolInformacoes: data.substancia.motivo_alcool,
        tabaco: data.substancia.uso_tabaco,
        tabacoInformacoes: data.substancia.motivo_tabaco,
        substancias: data.substancia.outras_substancias,
        substanciasMotivoUso: data.substancia.motivo_outras_substancias,
        substanciaMaiorUso: data.substancia.principal_substancia,

        situacaoRua: data.estado_social.situacao_rua,
        situacaoRuaInformacoes: data.estado_social.motivos_rua,
        chegadaMissaoVida: data.estado_social.chegada_missao_vida,
        chegadaMissaoVidaIgreja: data.estado_social.igreja,
        chegadaMissaoVidaSecretariaGov: data.estado_social.secretaria_governamental,
        comoSente: data.estado_social.sentimentos,
        objetivosAcolhido: data.estado_social.objetivos,
        outroCentroRecuperacao: data.estado_social.outros_centros,
        outroCentroRecuperacaoQual: data.estado_social.nome_outros_centros,
        outroCentroRecuperacaoInformacoes: data.estado_social.motivo_saida_outros_centros,

        autorizacaoGuardaDocumentos: data.termo_guarda.autorizacao_guarda,
        autorizacaoGuardaDocumentosQuais: data.termo_guarda.documentos_guardados,
        carteiraDocumentosAparencia: data.termo_guarda.descricao_carteira,
        valorMonetarioApresentado: data.termo_guarda.recurso_especie.toString(),
        aparelhoCelularApresentado: data.termo_guarda.aparelho_celular,
        objetoValorApresentado: data.termo_guarda.outros_objetos,
    };
};


export interface InternosInsaltArgs {
    idInterno?: string;
    onDadosSalvos?: (interno: any, isNovo: boolean) => void;
}