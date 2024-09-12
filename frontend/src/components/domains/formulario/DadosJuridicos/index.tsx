import { useFormContext } from "react-hook-form";
import { FormColumn } from "@/components/form/FormColumn";
import { FormRow } from "@/components/form/FormRow";
import { FormSection } from "@/components/form/FormSection";
import { FormInput } from "@/components/form/FormInput";
import { InternosInsaltSchema } from "../schema";
import { FormCheckbox } from "@/components/form/FormCheckbox";
import { cloneAndAddClass } from "@/components/form";

const classNamesSubSection = "border-l-2 border-gray-300 pl-2 ml-5";

export function DadosJuridicosInsalt() {
    const { getValues, watch } = useFormContext();
    const values = watch();

    return (
        <FormSection title="3 - DADOS SOBRE A VIDA JURÍDICA">
            <FormRow >
                <FormColumn span={6} >
                    <FormCheckbox name="foiPreso" label="Foi preso" />
                    <FormColumn span={8} className={classNamesSubSection}>
                        <FormInput<InternosInsaltSchema> name="foiPresoMotivo" label="Motivo" disabled={!values.foiPreso} />
                    </FormColumn>
                </FormColumn>
                <FormColumn span={6}>
                    <FormCheckbox<InternosInsaltSchema> name="respondeProcesso" label="Responde algum processo ou inquérito" />
                    <FormColumn span={8} className={classNamesSubSection}>
                        <FormInput name="respondeProcessoLocal" label="Em qual Cidade/Estado" disabled={!values.respondeProcesso} />
                    </FormColumn>
                </FormColumn>
            </FormRow>
            <FormRow className="mt-5">
                <FormColumn span={6}>
                    <FormCheckbox name="desacordoLei" label="Está em desacordo com a lei" />
                    <FormColumn span={8} className={classNamesSubSection}>
                        <FormInput name="desacordoLeiMotivo" label="Porquê" disabled={!values.desacordoLei} />
                    </FormColumn>
                </FormColumn>
                <FormColumn span={6} className="pl-4">
                        <FormCheckbox name="tornozeleiraEletronica" label="Faz uso de tornozeleira eletrônica" />
                        <FormColumn span={8} className={cloneAndAddClass(classNamesSubSection, "pt-3")}>
                            <FormCheckbox name="tornozeleiraEletronicaCentralMonitoramento" label="Informou a central de monitoramento" disabled={!values.tornozeleiraEletronica} />
                        </FormColumn>
                    </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={6} className="mt-4">
                    <FormCheckbox name="cumpriuPena" label="Já cumpriu pena" />
                </FormColumn>
            </FormRow>
        </FormSection>
    );
}
