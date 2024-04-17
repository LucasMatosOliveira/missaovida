import { InternoSchema } from "@/components/Schemas"
import { EstadoIbge, Internos } from "@/entidades/entidades"
import { abaCadastro } from "@/store/state"
import {  useState } from "react"
import { useForm } from "react-hook-form"

export function MainCardCadastroHook() {
  const [interno, setInterno] = useState<Internos>({
    id: '',
    nome: '',
    cpf: '',
    idade: 0,
    escolaridade: '',
    estadoNatural: EstadoIbge.AL,
    cidadeNatural: '',
    etnia: ''
  })

  const { register, handleSubmit, formState: { errors }, } = useForm<InternoSchema>()
  const handleSave = () => { 
   setInterno({
    id: '',
    nome: '',
    cpf: '',
    idade: 0,
    escolaridade: '',
    estadoNatural: EstadoIbge.AL,
    cidadeNatural: '',
    etnia: ''
  })
  }
 
  const handleReturn = () => {
    console.log(interno)
    abaCadastro.aba = true;
  }

  return { 
    register, handleSave: handleSubmit(handleSave), errors, handleReturn }

}