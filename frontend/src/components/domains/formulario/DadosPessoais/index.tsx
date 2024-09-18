import { FormColumn } from "@/components/form/FormColumn";
import { FormLabel } from "@/components/form/FormLabel";
import { FormInput } from "@/components/form/FormInput";
import { FormRow } from "@/components/form/FormRow";
import { FormSection } from "@/components/form/FormSection";
import { FilhosInsalt } from "./Filhos";
import { FormCheckbox } from "@/components/form/FormCheckbox";
import { InternosInsaltSchema } from "../schema";
import { useFormContext } from "react-hook-form";

const classNamesSubSection = "border-l-2 border-gray-300 pl-2 ml-5";

export function DadosPessoaisInsalt({ idInterno }: DadosPessoaisInsaltProps) {
    const { getValues, watch } = useFormContext();
    const values = watch();

    return (
        <FormSection title="1 - DADOS PESSOAIS DO ACOLHIDO">
            <FormRow>
                <FormColumn span={4}>
                    <FormInput name="name" label="Nome" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="naturalidade" label="Naturalidade (Cidade/estado)" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="cpf" label="CPF" />
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={4}>
                    <FormInput name="rg" label="RG" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="orgaoExpedidor" label="Órgão Expedidor" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="dataNascimento" label="Data de Nascimento" type="date" />
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={4}>
                    <FormInput name="etnia" label="Etnia" />
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormLabel name="filiacao" className="mb-2">Filiação:</FormLabel>
                <FormColumn span={4}>
                    <FormInput name="filiacaoPai" label="Pai" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="mae" label="Mãe" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="enderecoFamiliar" label="Endereço do familiar" />
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={4}>
                    <FormInput name="telefone" label="Telefone" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="whatsapp" label="WhatsApp" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="escolaridade" label="Escolaridade" />
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={4}>
                    <FormInput name="profissao" label="Profissão" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="estadoCivil" label="Estado Civil" />
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={6}>
                    <FormCheckbox<InternosInsaltSchema> name="temFamiliaApoio" label="Tem família que pode apoiá-lo?" />
                    <FormColumn span={8} className={classNamesSubSection}>
                        <FormInput name="nomeFamiliar" label="Nome do familiar" disabled={!values.temFamiliaApoio} />
                        <FormInput name="enderecoFamiliarApoio" label="Endereço do familiar" disabled={!values.temFamiliaApoio} />
                    </FormColumn>
                </FormColumn>
                <FormColumn span={6} >
                    <FormCheckbox<InternosInsaltSchema> name="religiao" label="Religião" />
                    <FormColumn span={8} className={classNamesSubSection}>
                        <FormInput name="qualReligiao" label="Qual Religião?"  disabled={!values.religiao}/>
                    </FormColumn>
                </FormColumn>
            </FormRow>
            <FormRow>
                <FilhosInsalt />
            </FormRow>
        </FormSection>
    );
}

export interface DadosPessoaisInsaltProps {
    idInterno?: string;
}

