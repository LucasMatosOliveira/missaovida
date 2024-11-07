import { FormColumn } from "@/components/form/FormColumn";
import { FormRow } from "@/components/form/FormRow";
import { FormSection } from "@/components/form/FormSection";
import { FormInput } from "@/components/form/FormInput";
import { useFormContext } from "react-hook-form";
import { InternosInsaltSchema } from "../schema";
import { FormCheckbox } from "@/components/form/FormCheckbox";
import { useAppFormContext } from "@/components/form/hook";

const classNamesSubSection = "border-l-2 border-gray-300 pl-2 ml-5";

export function DadosEstadoSocialInsalt() {
    const { getValues, watch } = useAppFormContext();
    const values = watch();
    return (
        <FormSection title="5 - SOBRE O ESTADO SOCIAL">
            <FormRow>
                <FormColumn span={6} >
                    <FormCheckbox<InternosInsaltSchema> name="situacaoRua" label="Estava em situação de rua" />
                    <FormColumn span={8} className={classNamesSubSection}>
                        <FormInput name="situacaoRuaInformacoes" label="Há quanto tempo e por quê?" disabled={!values.situacaoRua} />
                    </FormColumn>
                </FormColumn>
                <FormColumn span={6} >
                    <FormCheckbox<InternosInsaltSchema> name="outroCentroRecuperacao" label="Já passou por outro Centro de Recuperação antes" />
                    <FormColumn span={8} className={classNamesSubSection}>
                        <FormInput name="outroCentroRecuperacaoQual" label="Qual?" disabled={!values.outroCentroRecuperacao} />
                    </FormColumn>
                    <FormColumn span={8} className={classNamesSubSection}>
                        <FormInput name="outroCentroRecuperacaoInformacoes" label="Por quanto tempo e por que saiu?" disabled={!values.outroCentroRecuperacao} />
                    </FormColumn>
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={4}>
                    <FormInput name="chegadaMissaoVida" label="Como chegou a Missão Vida?" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="chegadaMissaoVidaIgreja" label="Se foi por uma Igreja, qual?" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="chegadaMissaoVidaSecretariaGov" label="Se foi por uma secretaria governamental, qual?" />
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={6}>
                    <FormInput name="comoSente" label="Como se sente na situação em que você se encontra?" />
                </FormColumn>
                <FormColumn span={6}>
                    <FormInput name="objetivosAcolhido" label="Quais são os seus objetivos como acolhido na Missão Vida?" />
                </FormColumn>
            </FormRow>
        </FormSection>

    );
}