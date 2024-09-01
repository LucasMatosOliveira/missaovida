import { FormColumn } from "@/components/form/FormColumn";
import { FormRow } from "@/components/form/FormRow";
import { FormSection } from "@/components/form/FormSection";
import { FormInput } from "@/components/form/FormInput";

export function DadosSubstanciasPsicoInsalt() {
    return (
        <FormSection title="4 - QUAIS SÃO AS SUBSTÂNCIAS PSICOATIVAS DO SEU USO">
            <FormRow>
                <FormColumn span={4}>
                    <FormInput name="alcool" label="Álcool" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="alcoolInformacoes" label="O que levou você a fazer o uso, com que idade e por quê?" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="tabaco" label="Você faz uso do tabaco?" />
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={4}>
                    <FormInput name="tabacoInformacoes" label="Com quantos anos começou?" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="substancias" label="Opções de substâncias em geral" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="substanciasMotivoUso" label="O que te levou a fazer uso das substância ou das substâncias?" />
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={4}>
                    <FormInput name="substanciaMaiorUso" label="Qual a principal substância que você faz uso?" />
                </FormColumn>
            </FormRow>
        </FormSection>

    );
}