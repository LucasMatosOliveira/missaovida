import { FormColumn } from "@/components/form/FormColumn";
import { FormInput } from "@/components/form/FormInput";
import { FormRow } from "@/components/form/FormRow";
import { FormSection } from "@/components/form/FormSection";

export function DadosPessoaisInsalt({ idInterno }: DadosPessoaisInsaltProps) {
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
                <FormColumn span={4}>
                    <FormInput name="filiacaoPai" label="Filiação: Pai" />
                </FormColumn>
                    <FormColumn span={4}>
                    <FormInput name="mae" label="Mãe" />
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={4}>
                    <FormInput name="enderecoFamiliar" label="Endereço do Familiar" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="telefone" label="Telefone" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="whatsapp" label="WhatsApp" />
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={4}>
                    <FormInput name="escolaridade" label="Escolaridade" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="profissao" label="Profissão" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="estadoCivil" label="Estado Civil" />
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={4}>
                    <FormInput name="temFamiliaApoio" label="Tem Família que pode apoiá-lo?" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="nomeFamiliar" label="Nome do Familiar" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="quantosFilhos" label="Quantos filhos?" />
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={4}>
                    <FormInput name="nomesFilhos" label="Nomes dos Filhos" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="pagaPensao" label="Paga pensão?" />
                </FormColumn>
                <FormColumn span={4}>
                    <FormInput name="religiao" label="Religião" />
                </FormColumn>
            </FormRow>
            <FormRow>
                <FormColumn span={4}>
                    <FormInput name="qualReligiao" label="Qual Religião?" />
                </FormColumn>
            </FormRow>
        </FormSection>
    );
}

export interface DadosPessoaisInsaltProps {
    idInterno?: string;
}

