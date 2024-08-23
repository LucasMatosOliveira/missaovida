"use client"
import { FormProvider } from "react-hook-form";
import { useInternosInsalt } from "./hook";
import { FormInput } from "@/components/form/FormInput";
import { Form } from "@/components/form";
import { InternosInsaltSchema } from "./schema";
import { useRouter } from "next/navigation";
import { AppRoutes } from "@/commom/http/app-routes";

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
            <div className="flex justify-between items-center mb-6" style={{ marginLeft: '-100px' }}>
              <h2 className="text-xl font-bold">Formulário de Cadastro</h2>
            </div>
          </div>
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
          <div className="flex items-center justify-center mt-6">
            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-customGreen hover:bg-customGreenHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cadastrar
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
