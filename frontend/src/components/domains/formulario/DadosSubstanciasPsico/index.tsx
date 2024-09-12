import { FormColumn } from "@/components/form/FormColumn";
import { FormRow } from "@/components/form/FormRow";
import { FormSection } from "@/components/form/FormSection";
import { FormInput } from "@/components/form/FormInput";
import { FormCheckbox } from "@/components/form/FormCheckbox";
import { InternosInsaltSchema } from "../schema";
import { useFormContext } from "react-hook-form";

const classNamesSubSection = "border-l-2 border-gray-300 pl-2 ml-5";

export function DadosSubstanciasPsicoInsalt() {
    const { getValues, watch } = useFormContext();
    const values = watch();
    return (
        <FormSection title="4 - QUAIS SÃO AS SUBSTÂNCIAS PSICOATIVAS DO SEU USO">
            <FormRow>
                <FormColumn span={6} >
                    <FormCheckbox<InternosInsaltSchema> name="alcool" label="Álcool" />
                    <FormColumn span={8} className={classNamesSubSection}>
                        <FormInput name="alcoolInformacoes" label="O que levou você a fazer o uso, com que idade e por quê" disabled={!values.alcool} />
                    </FormColumn>
                </FormColumn>
                <FormColumn span={6} >
                    <FormCheckbox<InternosInsaltSchema> name="tabaco" label="Faz uso do tabaco" />
                    <FormColumn span={8} className={classNamesSubSection}>
                        <FormInput name="tabacoInformacoes" label="Com quantos anos começou" disabled={!values.tabaco} />
                    </FormColumn>
                </FormColumn>
            </FormRow>
            <FormRow>
            <FormColumn span={6} >
                    <FormCheckbox<InternosInsaltSchema> name="substancias" label="Substâncias em geral" />
                    <FormColumn span={8} className={classNamesSubSection}>
                        <FormInput name="substanciasMotivoUso" label="O que te levou a fazer uso das substância ou das substâncias" disabled={!values.substancias} />
                    </FormColumn>
                    <FormColumn span={8} className={classNamesSubSection}>
                        <FormInput name="substanciaMaiorUso" label="Qual a principal substância que você faz uso" disabled={!values.substancias} />
                    </FormColumn>
                </FormColumn>
            </FormRow>
        </FormSection>

    );
}