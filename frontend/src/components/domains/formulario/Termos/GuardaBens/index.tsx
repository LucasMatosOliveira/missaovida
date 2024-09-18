import { FormColumn } from "@/components/form/FormColumn";
import { FormRow } from "@/components/form/FormRow";
import { FormSection } from "@/components/form/FormSection";
import { FormInput } from "@/components/form/FormInput";
import { FormCheckbox } from "@/components/form/FormCheckbox";
import { InternosInsaltSchema } from "../../schema";

export function TermoGuardaBensInsalt() {
    return (
        <FormSection title="6 - TERMO DE GUARDA DE BENS E DOCUMENTOS">
            <FormRow>
                <FormColumn span={12}>
                    <FormCheckbox<InternosInsaltSchema>
                        name="autorizacaoGuardaDocumentos"
                        label="Autorizo a guarda dos meus documentos pessoais, bem como algum valor monetário que venha a possuir durante o período do programa de recuperação, como forma de prevenção a perda e roubo."
                    />
                </FormColumn>
            </FormRow>
            <FormRow> 
                <FormColumn span={12}>
                    <FormInput name="autorizacaoGuardaDocumentosQuais" label="Quais documentos serão guardados?" />
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={4}>
                    <FormInput name="carteiraDocumentosAparencia" label="Qual a aparência/cor da carteira para documentos?" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="valorMonetarioApresentado" label="Apresentou recurso em espécie no valor de (R$)" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="aparelhoCelularApresentado" label="Aparelho celular/marca apresentado:" />
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={12}>
                    <FormInput name="objetoValorApresentado" label="Outros objetos de valor apresentados:" />
                </FormColumn>
            </FormRow>
        </FormSection>
    );
}