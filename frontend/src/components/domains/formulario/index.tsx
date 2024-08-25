"use client"
import { FormProvider } from "react-hook-form";
import { useInternosInsalt } from "./hook";
import { FormInput } from "@/components/form/FormInput";
import { Form } from "@/components/form";
import { InternosInsaltSchema } from "./schema";
import { useRouter } from "next/navigation";
import { AppRoutes } from "@/commom/http/app-routes";
import FormSection from "@/components/form/FormSection";

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
          <FormSection title="DADOS PESSOAIS DO ACOLHIDO">
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
                  Naturalidade
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

          <FormSection title="DADOS DE SAÚDE DO ACOLHIDO">
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
