import { FormColumn } from "@/components/form/FormColumn";
import { FormRow } from "@/components/form/FormRow";
import { FormSection } from "@/components/form/FormSection";
import { FormInput } from "@/components/form/FormInput";
import { FormCheckbox } from "@/components/form/FormCheckbox";
import { InternosInsaltSchema } from "../schema";
import { useAppFormContext } from "@/components/form/hook";

const classNamesSubSection = "border-l-2 border-gray-300 pl-2 ml-5";

export function DadosSaudeInsalt() {
    const { getValues, watch } = useAppFormContext();
    const values = watch();

    return (
        <FormSection title="2 - DADOS DE SAÚDE DO ACOLHIDO">
            <FormRow>
                <FormColumn span={6} >
                    <FormCheckbox<InternosInsaltSchema> name="tratamentoPsiquiatrico" label="Já passou por tratamento psiquiátrico" />
                    <FormColumn span={8} className={classNamesSubSection}>
                        <FormInput name="tratamentoPsiquiatricoLocal" label="Local (CAPS, Clínica Psiq., Hosp. Psiq.)" disabled={!values.tratamentoPsiquiatrico} />
                    </FormColumn>
                </FormColumn>
                <FormColumn span={6} >
                    <FormCheckbox<InternosInsaltSchema> name="medicamentosPsicotropicos" label="Já tomou ou toma medicamentos psicotrópicos" />
                    <FormColumn span={8} className={classNamesSubSection}>
                        <FormInput name="medicamentosPsicotropicosMotivo" label="Qual e por quê?" disabled={!values.medicamentosPsicotropicos} />
                    </FormColumn>
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={6} >
                    <FormCheckbox<InternosInsaltSchema> name="medicamentoUsoContinuo" label="Já tomou outro medicamento de uso contínuo" />
                    <FormColumn span={8} className={classNamesSubSection}>
                        <FormInput name="medicamentoUsoContinuoQual" label="Qual?" disabled={!values.medicamentoUsoContinuo} />
                    </FormColumn>
                </FormColumn>
                <FormColumn span={6} >
                    <FormCheckbox<InternosInsaltSchema> name="lesaoFisica" label="Já sofreu alguma lesão física" />
                    <FormColumn span={8} className={classNamesSubSection}>
                        <FormInput name="lesaoFisicaMembro" label="Em qual dos membros?" disabled={!values.lesaoFisica} />
                    </FormColumn>
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={6} >
                    <FormCheckbox<InternosInsaltSchema> name="doencaRespiratoria" label="Tem doença respiratória" />
                    <FormColumn span={8} className={classNamesSubSection}>
                        <FormInput name="doencaRespiratoriaTipo" label="Qual doença respiratória?" disabled={!values.doencaRespiratoria} />
                    </FormColumn>
                </FormColumn>
                <FormColumn span={6} >
                    <FormCheckbox<InternosInsaltSchema> name="alergiaAlimentar" label="Tem algum tipo de alergia alimentar" />
                    <FormColumn span={8} className={classNamesSubSection}>
                        <FormInput name="alergiaAlimentarTipo" label="Nome do alimento" disabled={!values.alergiaAlimentar} />
                    </FormColumn>
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={6} >
                    <FormCheckbox<InternosInsaltSchema> name="alergiaMedicamento" label="Tem alergia a algum medicamento" />
                    <FormColumn span={8} className={classNamesSubSection}>
                        <FormInput name="alergiaMedicamentoTipo" label="Nome do medicamento" disabled={!values.alergiaMedicamento} />
                    </FormColumn>
                </FormColumn>
                <FormColumn span={4} >
                    <FormCheckbox<InternosInsaltSchema> name="doencas" label="Apresenta alguma doença" />
                    <FormColumn span={8} className={classNamesSubSection}>
                        <FormInput name="doencasQual" label="Qual doença?" disabled={!values.doencas} />
                    </FormColumn>
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={6} >
                    <FormCheckbox<InternosInsaltSchema> name="doencaCoracao" label="Apresenta doenças do coração" />
                    <FormColumn span={8} className={classNamesSubSection}>
                        <FormInput name="doencaCoracaoTipo" label="Qual doença do coração?" disabled={!values.doencaCoracao} />
                    </FormColumn>
                </FormColumn>
                <FormColumn span={6} >
                    <FormCheckbox<InternosInsaltSchema> name="historicoCancer" label="Tem histórico de câncer" />
                    <FormColumn span={8} className={classNamesSubSection}>
                        <FormInput name="historicoCancerOrigem" label="Em você ou na família?" disabled={!values.historicoCancer} />
                    </FormColumn>
                    <FormColumn span={8} className={classNamesSubSection}>
                        <FormInput name="historicoCancerTipo" label="Qual tipo de câncer?" disabled={!values.historicoCancer} />
                    </FormColumn>
                </FormColumn>
            </FormRow>
            <FormRow className="mt-5">
                <FormColumn span={6}>
                    <FormCheckbox<InternosInsaltSchema> name="tentouSuicidio" label="Por algum motivo já tentou suicídio" />
                </FormColumn>
                <FormColumn span={6}>
                    <FormCheckbox<InternosInsaltSchema> name="autoMutilou" label="Por algum motivo já se automutilou" />
                </FormColumn>
            </FormRow>
        </FormSection>
    );
}