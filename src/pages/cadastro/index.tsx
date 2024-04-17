import { FormInput } from "@/components/Form/Input"
import { MainCardCadastroHook } from "./hook"
import { abaCadastro } from "@/store/state"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import App from "../App"

export function MainCardCadastro({ onVoltar }: any) {
  const { register, handleSave, errors } = MainCardCadastroHook()
  const [render, setRender] = useState(true);
  const handleReturn = () => {
    abaCadastro.aba = false;
    onVoltar();
    setRender(false);
    return <App />
  };
  return (
    <>
      <div className="fixed top-0 left-0 m-4">
      
        <button className="flex items-center space-x-2 px-4 py-2 bg-white rounded-md" onClick={handleReturn}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Voltar</span>
        </button>
      </div>
      {render && (
        <div>
          <div>
          <img src="https://revwildodosanjos.com.br/wp-content/themes/revwildo-spa/assets/images/vida.png" alt="" className='logo' />
          </div>
          <form onSubmit={handleSave}>
            <FormInput label="Nome" errors={errors} register={register('nome')} />
            <FormInput label="CPF" errors={errors} register={register('cpf')} />
            <FormInput label="Idade" errors={errors} register={register('idade')} />
            <FormInput label="Escolaridade" errors={errors} register={register('escolaridade')} />
            <FormInput label="Estado Natural" errors={errors} register={register('estadoNatural')} />
            <FormInput label="Cidade" errors={errors} register={register('cidadeNatural')} />
            <FormInput label="Etnia" errors={errors} register={register('etnia')} />
          </form>
          <div className="flex justify-center mt-4">
            <Button variant='outline' className=''>
              Salvar
            </Button>
          </div>
        </div>
      )}   
    </>
  )
}