import { FormColumn } from "@/components/form/FormColumn";
import { FormRow } from "@/components/form/FormRow";
import { FormSection } from "@/components/form/FormSection";
import { FormInput } from "@/components/form/FormInput";

export function DadosSaudeInsalt() {
    return (
        <FormSection title="2 - DADOS DE SAÚDE DO ACOLHIDO">
        <FormRow>
          <FormColumn span={4}>
            <FormInput name="tratamentoPsiquiatrico" label="Já passou por tratamento psiquiátrico?" />
          </FormColumn>
          <FormColumn span={4}>
            <FormInput name="tratamentoPsiquiatricoLocal" label="Aonde? (CAPS, Clínica Psiq., Hosp. Psiq.)" />
          </FormColumn>
          <FormColumn span={4}>
            <FormInput name="medicamentosPsicotropicos" label="Já tomou ou toma medicamentos psicotrópicos?" />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn span={4}>
            <FormInput name="medicamentosPsicotropicosMotivo" label="Qual e por quê?" />
          </FormColumn>
          <FormColumn span={4}>
            <FormInput name="medicamentoUsoContinuo" label="Já tomou outro medicamento de uso contínuo?" />
          </FormColumn>
          <FormColumn span={4}>
            <FormInput name="lesaoFisica" label="Já sofreu alguma lesão física?" />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn span={4}>
            <FormInput name="lesaoFisicaMembro" label="Em qual dos membros?" />
          </FormColumn>
          <FormColumn span={4}>
            <FormInput name="doencaRespiratoria" label="Tem doença respiratória?" />
          </FormColumn>
          <FormColumn span={4}>
            <FormInput name="doencaRespiratoriaTipo" label="Qual doença respiratória?" />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn span={4}>
            <FormInput name="alergiaAlimentar" label="Tem algum tipo de alergia alimentar?" />
          </FormColumn>
          <FormColumn span={4}>
            <FormInput name="alergiaAlimentarTipo" label="Nome do alimento:" />
          </FormColumn>
          <FormColumn span={4}>
            <FormInput name="alergiaMedicamento" label="Tem alergia a algum medicamento?" />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn span={4}>
            <FormInput name="alergiaMedicamentoTipo" label="Nome do medicamento:" />
          </FormColumn>
          <FormColumn span={4}>
            <FormInput name="doencas" label="Apresenta alguma doença?" />
          </FormColumn>
          <FormColumn span={4}>
            <FormInput name="doencaCoracao" label="Apresenta doenças do coração?" />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn span={4}>
            <FormInput name="doencaCoracaoTipo" label="Qual doença do coração?" />
          </FormColumn>
          <FormColumn span={4}>
            <FormInput name="tentouSuicidio" label="Por algum motivo já tentou suicídio?" />
          </FormColumn>
          <FormColumn span={4}>
            <FormInput name="autoMutilou" label="Por algum motivo já se automutilou?" />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn span={4}>
            <FormInput name="historicoCancer" label="Tem histórico de câncer?" />
          </FormColumn>
          <FormColumn span={4}>
            <FormInput name="historicoCancerTipo" label="Qual tipo de câncer?" />
          </FormColumn>
        </FormRow>
      </FormSection>

    );
}