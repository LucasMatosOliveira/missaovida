import { useFormContext } from "react-hook-form";
import { FormColumn } from "@/components/form/FormColumn";
import { FormRow } from "@/components/form/FormRow";
import { FormSection } from "@/components/form/FormSection";
import { FormInput } from "@/components/form/FormInput";
import { InternosInsaltSchema } from "../schema";

export function DadosJuridicosInsalt() {
    const { getValues } = useFormContext();
    const values = getValues();
    console.log(values)
    return (
        <FormSection title="3 - DADOS SOBRE A VIDA JURÍDICA">
            <FormRow>
                <FormColumn span={4}>
                    <FormInput<InternosInsaltSchema> name="foiPreso" label="Já foi preso?" />
                </FormColumn>
                <FormColumn span={4}>
                    {values.foiPreso && <FormInput<InternosInsaltSchema> name="foiPresoMotivo" label="Qual o motivo?" />}
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput<InternosInsaltSchema> name="respondeProcesso" label="Responde algum processo ou inquérito?" />
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={4}>
                    <FormInput name="respondeProcessoLocal" label="Em qual Cidade/Estado?" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="tornozeleiraEletronica" label="Faz uso de tornozeleira eletrônica?" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="tornozeleiraEletronicaCentralMonitoramento" label="Informou a central de monitoramento?" />
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={4}>
                    <FormInput name="cumpriuPena" label="Já cumpriu pena?" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="desacordoLei" label="Está em desacordo com a lei?" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="desacordoLeiMotivo" label="Porquê?" />
                </FormColumn>
            </FormRow>
        </FormSection>
    );
}
