"use client"
import { FormProvider } from "react-hook-form";
import { useInternosInsalt } from "./hook";
import { FormInput } from "@/components/form/FormInput";
import { Form } from "@/components/form";
import { InternosInsaltSchema } from "./schema";
import { useRouter } from "next/navigation";
import { AppRoutes } from "@/commom/http/app-routes";
import { FormSection } from "@/components/form/FormSection";

export function InternoInsalt({
  idInterno,
  onDadosSalvos,
}: InternoInsaltProps) {
  const { formMethods } = useInternosInsalt({ idInterno, onDadosSalvos });
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = formMethods;

  const router = useRouter();
  const handleSalvar = () => {
  };

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={handleSubmit(handleSalvar)}
        className="flex w-full items-center justify-center bg-gray-100"
      >
        <div className="form-container">
            <div className="grid grid-cols-2">
            <div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-white rounded-md text-black" onClick={() => router.push(AppRoutes.Dashboard())}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Voltar</span>
            </button>
            </div>
          <div className="flex justify-between items-center mb-6" style={{marginLeft: '-100px'}}>
            <h2 className="text-xl font-bold">Formulário de Cadastro</h2>
          </div>
            </div>
          <FormSection title="1 - DADOS PESSOAIS DO ACOLHIDO">
            <div className="grid grid-cols-3 gap-6">
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Nome
                </label>
                <Input name="name" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  CPF
                </label>
                <Input name="cpf" type="text" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Naturalidade (Cidade/estado)
                </label>
                <Input name="naturalidade" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  RG
                </label>
                <Input name="rg" type="text" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Órgão Expedidor
                </label>
                <Input name="orgaoExpedidor" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Data de Nascimento
                </label>
                <Input name="dataNascimento" type="date" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Etnia
                </label>
                <Input name="etnia" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Filiação: Pai
                </label>
                <Input name="filiacaoPai" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Mãe
                </label>
                <Input name="mae" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Endereço do Familiar
                </label>
                <Input name="enderecoFamiliar" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Telefone
                </label>
                <Input name="telefone" type="text" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  WhatsApp
                </label>
                <Input name="whatsapp" type="text" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Escolaridade
                </label>
                <Input name="escolaridade" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Profissão
                </label>
                <Input name="profissao" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Estado Civil
                </label>
                <Input name="estadoCivil" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Tem Família que pode apoiá-lo?
                </label>
                <Input name="temFamiliaApoio" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Nome do Familiar
                </label>
                <Input name="nomeFamiliar" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Quantos filhos?
                </label>
                <Input name="quantosFilhos" type="number" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Nomes dos Filhos
                </label>
                <Input name="nomesFilhos" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Paga pensão?
                </label>
                <Input name="pagaPensao" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Religião
                </label>
                <Input name="religiao" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Qual Religião?
                </label>
                <Input name="qualReligiao" />
              </div>
            </div>
          </FormSection>

          <FormSection title="2 - DADOS DE SAÚDE DO ACOLHIDO">
            <div className="grid grid-cols-3 gap-6">
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Já passou por tratamento psiquiátrico?
                </label>
                <Input name="tratamentoPsiquiatrico" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Aonde? (CAPS, Clinica Psiq., Hosp. Psiq.)
                </label>
                <Input name="tratamentoPsiquiatricoLocal" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Já tomou ou toma medicamentos psicotrópicos?
                </label>
                <Input name="medicamentosPsicotropicos" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Qual e por quê?
                </label>
                <Input name="medicamentosPsicotropicosMotivo" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Já tomou outro medicamento de uso contínuo?
                </label>
                <Input name="medicamentoUsoContinuo" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Já sofreu alguma lesão física?
                </label>
                <Input name="lesaoFisica" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Em qual dos membros?
                </label>
                <Input name="lesaoFisicaMembro" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Tem doença respiratória?
                </label>
                <Input name="doencaRespiratoria" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Qual doença respiratória?
                </label>
                <Input name="doencaRespiratoriaTipo" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Tem algum tipo de alergia alimentar?
                </label>
                <Input name="alergiaAlimentar" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Nome do alimento:
                </label>
                <Input name="alergiaAlimentarTipo" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Tem alergia a algum medicamento?
                </label>
                <Input name="alergiaMedicamento" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Nome do medicamento:
                </label>
                <Input name="alergiaMedicamentoTipo" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Apresenta alguma doença?
                </label>
                <Input name="doencas" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Apresenta doenças do coração?
                </label>
                <Input name="doencaCoracao" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Qual doença do coração?
                </label>
                <Input name="doencaCoracaoTipo" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Por algum motivo já tentou suicídio?
                </label>
                <Input name="tentouSuicidio" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Por algum motivo já se automutilou?
                </label>
                <Input name="autoMutilou" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Tem histórico de câncer?
                </label>
                <Input name="historicoCancer" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Qual tipo de câncer?
                </label>
                <Input name="historicoCancerTipo" />
              </div>
            </div>
          </FormSection>

          <FormSection title="3 - DADOS SOBRE A VIDA JURÍDICA">
            <div className="grid grid-cols-3 gap-6">
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Já foi preso?
                </label>
                <Input name="foiPreso" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Qual o motivo?
                </label>
                <Input name="foiPresoMotivo" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Responde algum processo ou inquérito?
                </label>
                <Input name="respondeProcesso" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Em qual Cidade/Estado?
                </label>
                <Input name="respondeProcessoLocal" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Faz uso de tornozeleira eletrônica?
                </label>
                <Input name="tornozeleiraEletronica" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Informou a central de monitoramento?
                </label>
                <Input name="tornozeleiraEletronicaCentralMonitoramento" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Já cumpriu pena?
                </label>
                <Input name="cumpriuPena" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Está em desacordo com a lei?
                </label>
                <Input name="desacordoLei" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Porquê?
                </label>
                <Input name="desacordoLeiMotivo" />
              </div>
            </div>
          </FormSection>

          <FormSection title="4 - QUAIS SÃO AS SUBSTÂNCIAS PSICOATIVAS DO SEU USO">
            <div className="grid grid-cols-3 gap-6">
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Álcool
                </label>
                <Input name="alcool" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  O que levou você a fazer o uso, com que idade e por quê?
                </label>
                <Input name="alcoolInformacoes" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Você faz uso do tabaco?
                </label>
                <Input name="tabaco" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Com quantos anos começou?
                </label>
                <Input name="tabacoInformacoes" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Opções de susbtancias em geral
                </label>
                <Input name="substancias" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  O que te levou a fazer uso das substância ou das substâncias?
                </label>
                <Input name="substanciasMotivoUso" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Qual a principal substância que você faz uso?
                </label>
                <Input name="substanciaMaiorUso" />
              </div>
            </div>
          </FormSection>
          
          <FormSection title="5 - SOBRE O ESTADO SOCIAL">
            <div className="grid grid-cols-3 gap-6">
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Estava em situação de rua?
                </label>
                <Input name="situacaoRua" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Há quanto tempo e por quê?
                </label>
                <Input name="situacaoRuaInformacoes" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Como chegou a Missão Vida?
                </label>
                <Input name="chegadaMissaoVida" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Qual Igreja?
                </label>
                <Input name="chegadaMissaoVidaIgreja" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Qual secretaria governamental?
                </label>
                <Input name="chegadaMissaoVidaSecretariaGov" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Como se sente na situação em que você se encontra?
                </label>
                <Input name="comoSente" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Quais são os seus objetivos como acolhido na Missão Vida?
                </label>
                <Input name="objetivosAcolhido" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Já passou por outro Centro de Recuperação antes?
                </label>
                <Input name="outroCentroRecuperacao" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Qual?
                </label>
                <Input name="outroCentroRecuperacaoQual" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Por quanto tempo e por que saiu?
                </label>
                <Input name="outroCentroRecuperacaoInformacoes" />
              </div>
            </div>
          </FormSection>

          <FormSection title="6 - TERMO DE GUARDA DE BENS E DOCUMENTOS">
            <div className="grid grid-cols-3 gap-6">
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Autorizo a guarda dos meus documentos pessoais, bem como algum valor monetário que venha a possuir durante o período do programa de recuperação, como forma de prevenção a perda e roubo.
                </label>
                <Input name="autorizacaoGuardaDocumentos" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Quais documentos serão guardados?
                </label>
                <Input name="autorizacaoGuardaDocumentosQuais" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Qual a aparência/cor da carteira para documentos?
                </label>
                <Input name="carteiraDocumentosAparencia" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Apresentou recurso em espécie no valor de: 
                </label>
                <Input name="valorMonetarioApresentado" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Aparelho celular/marca apresentado:
                </label>
                <Input name="aparelhoCelularApresentado" />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Outros objetos de valor apresentados:
                </label>
                <Input name="objetoValorApresentado" />
              </div>
            </div>
          </FormSection>

          <FormSection title="7 - TERMO DE RESPONSABILIDADE DE ACOLHIMENTO">
            <div className="grid grid-cols-3 gap-6">
              
            </div>
          </FormSection>

          <FormSection title="8 - TERMO DE ALTA DO ACOLHIDO">
            <div className="grid grid-cols-3 gap-6">
              
            </div>
          </FormSection>
          <div className="flex items-center justify-center mt-6">
            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-customGreen hover:bg-customGreenHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Salvar
            </button>
          </div>
        </div>
      </form>
    </FormProvider>

  );
}

const Input = FormInput<InternosInsaltSchema>;

export interface InternoInsaltProps {
  idInterno?: string;
  onDadosSalvos?: (interno: any, isNovo: boolean) => void;
}
