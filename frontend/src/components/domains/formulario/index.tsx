"use client"
import { FormProvider } from "react-hook-form";
import { useInternosInsalt } from "./hook";
import { FormInput } from "@/components/form/FormInput";
import { InternosInsaltSchema } from "./schema";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { setTabSufix, useTabs } from "@/components/tabs/hook";
import { useEffect, useMemo, useState } from "react";
import { TabsNav } from "@/components/tabs/TabsNav";
import { TabsNavItem } from "@/components/tabs/TabsNavItem";
import { TabsContainer } from "@/components/tabs/TabContainer";
import { TabItem } from "@/components/tabs/TabItem";
import { Form } from "@/components/form";
import { DadosPessoaisInsalt } from "./DadosPessoais";
import { DadosSaudeInsalt } from "./DadosSaude";
import { DadosJuridicosInsalt } from "./DadosJuridicos";
import { DadosSubstanciasPsicoInsalt } from "./DadosSubstanciasPsico";
import { DadosEstadoSocialInsalt } from "./DadosEstadoSocial";
import { TermosInsalt } from "./Termos";

export function InternoInsalt({ idInterno, onDadosSalvos }: InternoInsaltProps) {
    const { formMethods } = useInternosInsalt({ idInterno, onDadosSalvos });
    const { handleSubmit, formState: { errors, isSubmitting }, watch, reset } = formMethods;

    const abasId = useMemo(() => setTabSufix({
        dadosPessoais: 'dadosPessoais',
        dadosSaude: 'dadosSaude',
        dadosVidaJuridica: 'dadosVidaJuridica',
        dadosSubstanciasPsico: 'dadosSubstanciasPsico',
        dadosEstadoSocial: 'dadosEstadoSocial',
        dadosVidaFamiliar: 'dadosVidaFamiliar',
        dadosTermos: 'dadosTermos',
    }), []);


    const tabsOptions = useTabs({ initalTab: abasId.dadosPessoais });

    const router = useRouter();
    const handleSalvar = () => {
        const formData = watch();
        
        type TabName = 'dados_saude' | 'vida_juridica' | 'substancia' | 'estado_social' | 'termo_guarda';
        
        const fieldNameMapping: Record<keyof InternosInsaltSchema, string> = {
            id: 'id_interno',
            name: 'nome_acolhido',
            naturalidade: 'naturalidade',
            cpf: 'cpf_acolhido',
            rg: 'rg_acolhido',
            orgaoExpedidor: 'orgao_expedidor_rg',
            dataNascimento: 'data_nascimento',
            etnia: 'declaracao_racial',
            filiacaoPai: 'filiacao_pai',
            mae: 'filiacao_mae',
            enderecoFamiliar: 'endereco_familiar',
            telefone: 'telefone',
            whatsapp: 'whatsapp',
            escolaridade: 'escolaridade_acolhido',
            profissao: 'profissao_acolhido',
            estadoCivil: 'estado_civil_acolhido',
            temFamiliaApoio: 'apoio_familiar',
            nomeFamiliar: 'nome_apoio',
            enderecoFamiliarApoio: 'endereco_apoio',
            religiao: 'religiao_acolhido',
            qualReligiao: 'qual_religiao',
            filhos: 'acolhidoFilhos',

            tratamentoPsiquiatrico: 'tratamento_psiquiatrico',
            tratamentoPsiquiatricoLocal: 'local_tratamento',
            medicamentosPsicotropicos: 'medicamento_psicotropico',
            medicamentosPsicotropicosMotivo: 'descricao_psicotropico',
            medicamentoUsoContinuo: 'medicamento_uso_continuo',
            medicamentoUsoContinuoQual: 'descricao_uso_continuo',
            lesaoFisica: 'lesao_fisica',
            lesaoFisicaMembro: 'local_lesao_fisica',
            doencaRespiratoria: 'doenca_respiratoria',
            doencaRespiratoriaTipo: 'nome_doenca_respiratoria',
            alergiaAlimentar: 'alergia_alimentar',
            alergiaAlimentarTipo: 'nome_alimento',
            alergiaMedicamento: 'alergia_medicamentos',
            alergiaMedicamentoTipo: 'nome_alergia_medicamento',
            doencas: 'alguma_doenca',
            doencasQual: 'nome_doenca',
            doencaCoracao: 'problema_coracao',
            doencaCoracaoTipo: 'doenca_coracao',
            historicoCancer: 'tem_cancer',
            historicoCancerOrigem: 'historico_cancer',
            historicoCancerTipo: 'tipo_cancer',
            tentouSuicidio: 'tentativa_suicidio',
            autoMutilou: 'automutilacao',

            foiPreso: 'historico_prisao',
            foiPresoMotivo: 'motivo_prisao',
            respondeProcesso: 'processos',
            respondeProcessoLocal: 'localidade_processo',
            tornozeleiraEletronica: 'uso_tornozeleira',
            tornozeleiraEletronicaCentralMonitoramento: 'informou_central',
            desacordoLei: 'situacao_legal',
            desacordoLeiMotivo: 'motivo_situacao_ilegal',
            cumpriuPena: 'cumpriu_pena',

            alcool: 'uso_alcool',
            alcoolInformacoes: 'motivo_alcool',
            tabaco: 'uso_tabaco',
            tabacoInformacoes: 'motivo_tabaco',
            substancias: 'outras_substancias',
            substanciaMaiorUso: 'principal_substancia',
            substanciasMotivoUso: 'motivo_outras_substancias',

            situacaoRua: 'situacao_rua',
            situacaoRuaInformacoes: 'motivos_rua',
            outroCentroRecuperacao: 'outros_centros',
            outroCentroRecuperacaoQual: 'nome_outros_centros',
            outroCentroRecuperacaoInformacoes: 'motivo_saida_outros_centros',
            chegadaMissaoVida: 'chegada_missao_vida',
            chegadaMissaoVidaIgreja: 'igreja',
            chegadaMissaoVidaSecretariaGov: 'secretaria_governamental',
            comoSente: 'sentimentos',
            objetivosAcolhido: 'objetivos',

            autorizacaoGuardaDocumentos: 'autorizacao_guarda',
            autorizacaoGuardaDocumentosQuais: 'documentos_guardados',
            carteiraDocumentosAparencia: 'descricao_carteira',
            valorMonetarioApresentado: 'recurso_especie',
            aparelhoCelularApresentado: 'aparelho_celular',
            objetoValorApresentado: 'outros_objetos'
        };

        const tabFieldMapping: Record<TabName, Array<keyof InternosInsaltSchema>> = {
            dados_saude: ['tratamentoPsiquiatrico', 'tratamentoPsiquiatricoLocal', 'medicamentosPsicotropicos', 'medicamentosPsicotropicosMotivo', 'medicamentoUsoContinuo', 'medicamentoUsoContinuoQual', 'lesaoFisica', 'lesaoFisicaMembro', 'doencaRespiratoria', 'doencaRespiratoriaTipo', 'alergiaAlimentar', 'alergiaAlimentarTipo', 'alergiaMedicamento', 'alergiaMedicamentoTipo', 'doencas', 'doencasQual', 'doencaCoracao', 'doencaCoracaoTipo', 'historicoCancer', 'historicoCancerOrigem', 'historicoCancerTipo', 'tentouSuicidio', 'autoMutilou'],
            vida_juridica: ['foiPreso', 'foiPresoMotivo', 'respondeProcesso', 'respondeProcessoLocal', 'tornozeleiraEletronica', 'tornozeleiraEletronicaCentralMonitoramento', 'desacordoLei', 'desacordoLeiMotivo', 'cumpriuPena'],
            substancia: ['alcool', 'alcoolInformacoes', 'tabaco', 'tabacoInformacoes', 'substancias', 'substanciaMaiorUso', 'substanciasMotivoUso'],
            estado_social: ['situacaoRua', 'situacaoRuaInformacoes', 'outroCentroRecuperacao', 'outroCentroRecuperacaoQual', 'outroCentroRecuperacaoInformacoes', 'chegadaMissaoVida', 'chegadaMissaoVidaIgreja', 'chegadaMissaoVidaSecretariaGov', 'comoSente', 'objetivosAcolhido'],
            termo_guarda: ['autorizacaoGuardaDocumentos', 'autorizacaoGuardaDocumentosQuais', 'carteiraDocumentosAparencia', 'valorMonetarioApresentado', 'aparelhoCelularApresentado', 'objetoValorApresentado'],
        };

        const dadosPessoaisFields: Array<keyof InternosInsaltSchema> = ['name', 'naturalidade', 'cpf', 'rg', 'orgaoExpedidor', 'dataNascimento', 'etnia', 'filiacaoPai', 'mae', 'enderecoFamiliar', 'telefone', 'whatsapp', 'escolaridade', 'profissao', 'estadoCivil', 'temFamiliaApoio', 'nomeFamiliar', 'enderecoFamiliarApoio', 'religiao', 'qualReligiao', 'filhos'];
    
        const processValue = (value: any, field: string) => {
            if (typeof value === 'boolean') {
                return value;
            } else if (value === '' || value === undefined) {
                const checkboxFields = ['temFamiliaApoio', 'religiao', 'pagaPensao', 'tratamentoPsiquiatrico', 'medicamentosPsicotropicos', 'medicamentoUsoContinuo', 'lesaoFisica', 'doencaRespiratoria', 'alergiaAlimentar', 'alergiaMedicamento', 'doencas', 'doencaCoracao', 'historicoCancer', 'tentouSuicidio', 'autoMutilou', 'foiPreso', 'respondeProcesso', 'tornozeleiraEletronica', 'tornozeleiraEletronicaCentralMonitoramento', 'desacordoLei', 'cumpriuPena', 'alcool', 'tabaco', 'substancias', 'situacaoRua', 'outroCentroRecuperacao', 'autorizacaoGuardaDocumentos'];
                return checkboxFields.includes(field) ? false : "";
            } else {
                return value;
            }
        };

        const tabData: Record<string, any> = {};
    
        dadosPessoaisFields.forEach(field => {
            const jsonFieldName = fieldNameMapping[field] || field;
            if (field === 'filhos') {
                const filhosData = formData[field] as Array<{id: string, nome: string, pagaPensao: boolean}> | undefined;
                tabData[jsonFieldName] = filhosData?.map(filho => ({
                    id: filho.id,
                    nome: processValue(filho.nome, 'nome_filho'),
                    paga_pensao: processValue(filho.pagaPensao, 'paga_pensao')
                })) || undefined;
            } else {
                tabData[jsonFieldName] = processValue(formData[field], field as string);
            }
        });
    
        Object.entries(tabFieldMapping).forEach(([tab, fields]) => {
            tabData[tab] = fields.reduce((tabAcc, field) => {
                const jsonFieldName = fieldNameMapping[field] || field;
                tabAcc[jsonFieldName] = processValue(formData[field], field as string);
                return tabAcc;
            }, {} as Record<string, any>);
        });
    
        const jsonData = JSON.stringify(tabData, null, 2);
        console.log('Form Data:', jsonData);
        
        if (onDadosSalvos) {
            onDadosSalvos(tabData, !idInterno);
        }
    };

    return (
        <FormProvider {...formMethods}>
            <Form onSubmit={handleSubmit(handleSalvar)}>
                <TabsNav>
                    <TabsNavItem {...tabsOptions} tabId={abasId.dadosPessoais}>Dados Pessoais</TabsNavItem>
                    <TabsNavItem {...tabsOptions} tabId={abasId.dadosSaude}>Dados de Saúde</TabsNavItem>
                    <TabsNavItem {...tabsOptions} tabId={abasId.dadosVidaJuridica}>Dados de Vida Jurídica</TabsNavItem>
                    <TabsNavItem {...tabsOptions} tabId={abasId.dadosSubstanciasPsico}>Dados de Substâncias Psicoativas</TabsNavItem>
                    <TabsNavItem {...tabsOptions} tabId={abasId.dadosEstadoSocial}>Dados de Estado Social</TabsNavItem>
                    <TabsNavItem {...tabsOptions} tabId={abasId.dadosTermos}>Termos</TabsNavItem>
                </TabsNav>
                <TabsContainer>
                    <TabItem {...tabsOptions} tabId={abasId.dadosPessoais}>
                        <DadosPessoaisInsalt />
                    </TabItem>
                    <TabItem {...tabsOptions} tabId={abasId.dadosSaude}>
                        <DadosSaudeInsalt />
                    </TabItem>
                    <TabItem {...tabsOptions} tabId={abasId.dadosVidaJuridica}>
                        <DadosJuridicosInsalt />
                    </TabItem>
                    <TabItem {...tabsOptions} tabId={abasId.dadosSubstanciasPsico}>
                        <DadosSubstanciasPsicoInsalt />
                    </TabItem>
                    <TabItem {...tabsOptions} tabId={abasId.dadosEstadoSocial}>
                        <DadosEstadoSocialInsalt />
                    </TabItem>
                    <TabItem {...tabsOptions} tabId={abasId.dadosTermos}>
                        <TermosInsalt />
                    </TabItem>
                </TabsContainer>
                <div className="flex items-center justify-center mt-6">
                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className="bg-customGreen hover:bg-customGreenHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Salvar
                    </button>
                </div>

            </Form>
        </FormProvider>

    );
}

const Input = FormInput<InternosInsaltSchema>;

export interface InternoInsaltProps {
    idInterno?: string;
    onDadosSalvos?: (interno: any, isNovo: boolean) => void;
}
