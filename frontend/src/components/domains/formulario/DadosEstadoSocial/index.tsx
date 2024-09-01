import { FormColumn } from "@/components/form/FormColumn";
import { FormRow } from "@/components/form/FormRow";
import { FormSection } from "@/components/form/FormSection";
import { FormInput } from "@/components/form/FormInput";

export function DadosEstadoSocialInsalt() {
    return (
        <FormSection title="5 - SOBRE O ESTADO SOCIAL">
            <FormRow>
                <FormColumn span={4}>
                    <FormInput name="situacaoRua" label="Estava em situação de rua?" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="situacaoRuaInformacoes" label="Há quanto tempo e por quê?" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="chegadaMissaoVida" label="Como chegou a Missão Vida?" />
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={4}>
                    <FormInput name="chegadaMissaoVidaIgreja" label="Qual Igreja?" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="chegadaMissaoVidaSecretariaGov" label="Qual secretaria governamental?" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="comoSente" label="Como se sente na situação em que você se encontra?" />
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={4}>
                    <FormInput name="objetivosAcolhido" label="Quais são os seus objetivos como acolhido na Missão Vida?" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="outroCentroRecuperacao" label="Já passou por outro Centro de Recuperação antes?" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="outroCentroRecuperacaoQual" label="Qual?" />
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={4}>
                    <FormInput name="outroCentroRecuperacaoInformacoes" label="Por quanto tempo e por que saiu?" />
                </FormColumn>
            </FormRow>
        </FormSection>

    );
}