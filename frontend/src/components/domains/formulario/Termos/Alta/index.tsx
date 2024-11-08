import { FormCheckbox } from "@/components/form/FormCheckbox";
import { FormColumn } from "@/components/form/FormColumn";
import { FormInput } from "@/components/form/FormInput";
import { FormRow } from "@/components/form/FormRow";
import { FormSection } from "@/components/form/FormSection";
import { InternosInsaltSchema } from "../../schema";

export function TermoAltaInsalt() {
    return (
        <FormSection title="TERMO DE ALTA DO ACOLHIDO">
            <FormRow>
                <FormColumn span={12}>
                    <FormInput name="nameAlta" label="Nome:" />
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={12}>
                    <FormCheckbox<InternosInsaltSchema>
                        name="altaTerapeutica"
                        label="Alta Terapêutica (Conclusão)"
                    />
                </FormColumn>
                <FormColumn span={12}>
                    <FormCheckbox<InternosInsaltSchema>
                        name="altaDesistencia"
                        label="Desistência (Alta a pedido)"
                    />
                </FormColumn>
                <FormColumn span={12}>
                    <FormCheckbox<InternosInsaltSchema>
                        name="altaAdministrativa"
                        label="Alta Administrativa (Desligamento)"
                    />
                </FormColumn>
                <FormColumn span={12}>
                    <FormCheckbox<InternosInsaltSchema>
                        name="altaAbandono"
                        label="Abandono (Evasão ou fuga)"
                    />
                </FormColumn>
                <FormColumn span={12}>
                    <FormCheckbox<InternosInsaltSchema>
                        name="altaJudicial"
                        label="Decisão Judiciária/Procedimento Policial"
                    />
                </FormColumn>
                <FormColumn span={12}>
                    <FormCheckbox<InternosInsaltSchema>
                        name="altaFalecimento"
                        label="Falecimento"
                    />
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={12}>
                    <FormInput name="justificativaAlta" label="Justificativa da saída:" />
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={10}>
                    <FormInput name="nucleoAlta" label="Núcleo de:" />
                </FormColumn>
                <FormColumn span={2}>
                    <FormInput name="dataAlta" label="Data da Alta:" type="date" />
                </FormColumn>
            </FormRow>
          </FormSection>
    );
}