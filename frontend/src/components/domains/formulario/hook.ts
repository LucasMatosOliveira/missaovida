import { useForm } from "react-hook-form";
import { internosInsaltSchema, InternosInsaltSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo } from "react";
import { InternosApi } from "./internos.api";
import { useSpinner } from "@/contexts/SpinnerContext";
import { useSnapshot } from "valtio";
import { authState } from "@/store/login";
import { createFakeTempGUID } from "@/commom/primitives/guid";
import { toast } from "react-toastify";
import { useAppForm } from "@/components/form/hook";
import { AcolhidoFilho, Interno, InternoReturn } from "./entidades";

export function useInternosInsalt({ idInterno, onDadosSalvos }: InternosInsaltArgs) {
    const formMethods = useAppForm<InternosInsaltSchema>({
        resolver: zodResolver(internosInsaltSchema),
        defaultValues: {
            foiPreso: false
        }
    });

    const { showSpinner, hideSpinner } = useSpinner();
    const state = useSnapshot(authState);

    const { reset } = formMethods;

    useEffect(() => {
        if (!idInterno)
            return;


        (async () => {
            try {
                showSpinner();
                const api = new InternosApi();
                const response = await api.getInternoPorId(idInterno, state.token!);
                console.log({ response })
                const mappedData = mapTypeForSchema(response);
                console.log({ mappedData })
                reset(mappedData);
            }
            catch (error) {
                console.log("Usuário não encontrado");
            }
            finally {
                hideSpinner();
            }
        })();

    }, [idInterno]);

    const handleSalvar = async (data: InternosInsaltSchema) => {
        const isNovo = !idInterno;
        console.log('teste')
        const dados = mapSchemaForType(data);

        try {
            const api = new InternosApi()
            const response = isNovo
                ? await api.inserir(dados, state.token!)
                : await api.alterar(idInterno, dados, state.token!);

            toast.success('Dados salvos com sucesso')

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
        nome_acolhido: data.name || '',
        naturalidade: data.naturalidade || '',
        cpf_acolhido: data.cpf || '',
        rg_acolhido: data.rg || '',
        orgao_expedidor_rg: data.orgaoExpedidor || '',
        data_nascimento: data.dataNascimento || '',
        declaracao_racial: data.etnia || '',
        filiacao_pai: data.filiacaoPai || '',
        filiacao_mae: data.mae || '',
        endereco_familiar: data.enderecoFamiliar || '',
        telefone: data.telefone || '',
        whatsapp: data.whatsapp || '',
        escolaridade_acolhido: data.escolaridade || '',
        profissao_acolhido: data.profissao || '',
        estado_civil_acolhido: data.estadoCivil || '',
        apoio_familiar: data.temFamiliaApoio || (!!data.nomeFamiliar),
        nome_apoio: data.nomeFamiliar || '',
        endereco_apoio: data.enderecoFamiliarApoio || '',
        religiao_acolhido: data.religiao || false,
        qual_religiao: data.qualReligiao || '',
        ativo: true,
        acolhidoFilhos: data.filhos?.filter(filho => filho.nome)
            .map(filho => ({
                nome_filho: filho.nome || '',
                paga_pensao: filho.pagaPensao || false,
            })) as AcolhidoFilho[],
        dados_saude: {
            tratamento_psiquiatrico: data.tratamentoPsiquiatrico || false,
            local_tratamento: data.tratamentoPsiquiatricoLocal || '',
            medicamento_psicotropico: data.medicamentosPsicotropicos || false,
            descricao_psicotropico: data.medicamentosPsicotropicosMotivo || '',
            medicamento_uso_continuo: data.medicamentoUsoContinuo || false,
            descricao_uso_continuo: data.medicamentoUsoContinuoQual || '',
            lesao_fisica: data.lesaoFisica || false,
            local_lesao_fisica: data.lesaoFisicaMembro || '',
            doenca_respiratoria: data.doencaRespiratoria || false,
            nome_doenca_respiratoria: data.doencaRespiratoriaTipo || '',
            alergia_alimentar: data.alergiaAlimentar || false,
            nome_alimento: data.alergiaAlimentarTipo || '',
            alergia_medicamentos: data.alergiaMedicamento || false,
            nome_alergia_medicamento: data.alergiaMedicamentoTipo || '',
            alguma_doenca: data.doencas || false,
            nome_doenca: data.doencasQual || '',
            problema_coracao: data.doencaCoracao || false,
            doenca_coracao: data.doencaCoracaoTipo || '',
            tem_cancer: data.historicoCancer || false,
            historico_cancer: data.historicoCancerTipo || '',
            tipo_cancer: data.historicoCancerOrigem || '',
            tentativa_suicidio: data.tentouSuicidio || false,
            automutilacao: data.autoMutilou || false,
        },
        vida_juridica: {
            historico_prisao: data.foiPreso || false,
            motivo_prisao: data.foiPresoMotivo || '',
            processos: data.respondeProcesso || false,
            localidade_processo: data.respondeProcessoLocal || '',
            uso_tornozeleira: data.tornozeleiraEletronica || false,
            informou_central: data.tornozeleiraEletronicaCentralMonitoramento || false,
            situacao_legal: !data.desacordoLei,
            motivo_situacao_ilegal: data.desacordoLeiMotivo || '',
            cumpriu_pena: data.cumpriuPena || false,
        },
        substancia: {
            uso_alcool: data.alcool || false,
            motivo_alcool: data.alcoolInformacoes || '',
            uso_tabaco: data.tabaco || false,
            motivo_tabaco: data.tabacoInformacoes || '',
            outras_substancias: data.substancias || false,
            principal_substancia: data.substanciaMaiorUso || '',
            motivo_outras_substancias: data.substanciasMotivoUso || '',
        },
        estado_social: {
            situacao_rua: data.situacaoRua || false,
            motivos_rua: data.situacaoRuaInformacoes || '',
            outros_centros: data.outroCentroRecuperacao || false,
            nome_outros_centros: data.outroCentroRecuperacaoQual || '',
            motivo_saida_outros_centros: data.outroCentroRecuperacaoInformacoes || '',
            chegada_missao_vida: data.chegadaMissaoVida || '',
            igreja: data.chegadaMissaoVidaIgreja || '',
            secretaria_governamental: data.chegadaMissaoVidaSecretariaGov || '',
            sentimentos: data.comoSente || '',
            objetivos: data.objetivosAcolhido || '',
        },
        termo_guarda: {
            autorizacao_guarda: data.autorizacaoGuardaDocumentos || false,
            documentos_guardados: data.autorizacaoGuardaDocumentosQuais || '',
            descricao_carteira: data.carteiraDocumentosAparencia || '',
            recurso_especie: parseFloat(data.valorMonetarioApresentado!) || 0,
            aparelho_celular: data.aparelhoCelularApresentado || '',
            outros_objetos: data.objetoValorApresentado || '',
        },
    } as Interno;
};

const mapTypeForSchema = (data: Partial<InternoReturn>): InternosInsaltSchema => {
    console.log({ data });
    return {
        id: data.id_acolhido ? data.id_acolhido.toString() : '',
        name: data.nome_acolhido || '',
        cpf: data.cpf_acolhido || '',
        naturalidade: data.naturalidade || '',
        rg: data.rg_acolhido || '',
        orgaoExpedidor: data.orgao_expedidor_rg || '',
        dataNascimento: data.data_nascimento || '',
        etnia: data.declaracao_racial || '',
        filiacaoPai: data.filiacao_pai || '',
        mae: data.filiacao_mae || '',
        enderecoFamiliar: data.endereco_familiar || '',
        telefone: data.telefone || '',
        whatsapp: data.whatsapp || '',
        escolaridade: data.escolaridade_acolhido || '',
        profissao: data.profissao_acolhido || '',
        estadoCivil: data.estado_civil_acolhido || '',
        temFamiliaApoio: data.apoio_familiar || false,
        nomeFamiliar: data.nome_apoio || '',
        enderecoFamiliarApoio: data.endereco_apoio || '',
        filhos: data.filho ? data.filho.map(filho => ({
            id: 'FAKEID-000000000000' + filho.nome_filho,
            nome: filho.nome_filho,
            pagaPensao: filho.paga_pensao
        })) : [],
        religiao: data.religiao_acolhido || false,
        qualReligiao: data.qual_religiao || '',

        tratamentoPsiquiatrico: data.saude?.[0]?.tratamento_psiquiatrico || false,
        tratamentoPsiquiatricoLocal: data.saude?.[0]?.local_tratamento || '',
        medicamentosPsicotropicos: data.saude?.[0]?.medicamento_psicotropico || false,
        medicamentosPsicotropicosMotivo: data.saude?.[0]?.descricao_psicotropico || '',
        medicamentoUsoContinuo: data.saude?.[0]?.medicamento_uso_continuo || false,
        medicamentoUsoContinuoQual: data.saude?.[0]?.descricao_uso_continuo || '',
        lesaoFisica: data.saude?.[0]?.lesao_fisica || false,
        lesaoFisicaMembro: data.saude?.[0]?.local_lesao_fisica || '',
        doencaRespiratoria: data.saude?.[0]?.doenca_respiratoria || false,
        doencaRespiratoriaTipo: data.saude?.[0]?.nome_doenca_respiratoria || '',
        alergiaAlimentar: data.saude?.[0]?.alergia_alimentar || false,
        alergiaAlimentarTipo: data.saude?.[0]?.nome_alimento || '',
        alergiaMedicamento: data.saude?.[0]?.alergia_medicamentos || false,
        alergiaMedicamentoTipo: data.saude?.[0]?.nome_alergia_medicamento || '',
        doencas: data.saude?.[0]?.alguma_doenca || false,
        doencasQual: data.saude?.[0]?.nome_doenca || '',
        doencaCoracao: data.saude?.[0]?.problema_coracao || false,
        doencaCoracaoTipo: data.saude?.[0]?.doenca_coracao || '',
        tentouSuicidio: data.saude?.[0]?.tentativa_suicidio || false,
        autoMutilou: data.saude?.[0]?.automutilacao || false,
        historicoCancer: data.saude?.[0]?.tem_cancer || false,
        historicoCancerTipo: data.saude?.[0]?.historico_cancer || '',
        historicoCancerOrigem: data.saude?.[0]?.tipo_cancer || '',

        foiPreso: data.vidajuridica?.[0]?.historico_prisao || false,
        foiPresoMotivo: data.vidajuridica?.[0]?.motivo_prisao || '',
        respondeProcesso: data.vidajuridica?.[0]?.processos || false,
        respondeProcessoLocal: data.vidajuridica?.[0]?.localidade_processo || '',
        tornozeleiraEletronica: data.vidajuridica?.[0]?.uso_tornozeleira || false,
        tornozeleiraEletronicaCentralMonitoramento: data.vidajuridica?.[0]?.informou_central || false,
        cumpriuPena: data.vidajuridica?.[0]?.cumpriu_pena || false,
        desacordoLei: !data.vidajuridica?.[0]?.situacao_legal || false,
        desacordoLeiMotivo: data.vidajuridica?.[0]?.motivo_situacao_ilegal || '',

        alcool: data.substancia?.[0]?.uso_alcool || false,
        alcoolInformacoes: data.substancia?.[0]?.motivo_alcool || '',
        tabaco: data.substancia?.[0]?.uso_tabaco || false,
        tabacoInformacoes: data.substancia?.[0]?.motivo_tabaco || '',
        substancias: data.substancia?.[0]?.outras_substancias !== "" || false,
        substanciasMotivoUso: data.substancia?.[0]?.motivo_outras_substancias || '',
        substanciaMaiorUso: data.substancia?.[0]?.principal_substancia || '',

        situacaoRua: data.social?.[0]?.situacao_rua || false,
        situacaoRuaInformacoes: data.social?.[0]?.motivos_rua || '',
        chegadaMissaoVida: data.social?.[0]?.chegada_missao_vida || '',
        chegadaMissaoVidaIgreja: data.social?.[0]?.igreja || '',
        chegadaMissaoVidaSecretariaGov: data.social?.[0]?.secretaria_governamental || '',
        comoSente: data.social?.[0]?.sentimentos || '',
        objetivosAcolhido: data.social?.[0]?.objetivos || '',
        outroCentroRecuperacao: data.social?.[0]?.outros_centros || false,
        outroCentroRecuperacaoQual: data.social?.[0]?.nome_outros_centros || '',
        outroCentroRecuperacaoInformacoes: data.social?.[0]?.motivo_saida_outros_centros || '',

        autorizacaoGuardaDocumentos: data.termoguarda?.[0]?.autorizacao_guarda || false,
        autorizacaoGuardaDocumentosQuais: data.termoguarda?.[0]?.documentos_guardados || '',
        carteiraDocumentosAparencia: data.termoguarda?.[0]?.descricao_carteira || '',
        valorMonetarioApresentado: data.termoguarda?.[0]?.recurso_especie?.toString() || '',
        aparelhoCelularApresentado: data.termoguarda?.[0]?.aparelho_celular || '',
        objetoValorApresentado: data.termoguarda?.[0]?.outros_objetos || '',
    };
};


export interface InternosInsaltArgs {
    idInterno?: string;
    onDadosSalvos?: (interno: any, isNovo: boolean) => void;
}