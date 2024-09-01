"use client"
import { FormProvider } from "react-hook-form";
import { useInternosInsalt } from "./hook";
import { FormInput } from "@/components/form/FormInput";
import { InternosInsaltSchema } from "./schema";
import { useRouter } from "next/navigation";
import { AppRoutes } from "@/commom/http/app-routes";
import { FormSection } from "@/components/form/FormSection";
import { setTabSufix, useTabs } from "@/components/tabs/hook";
import { useMemo } from "react";
import { TabsNav } from "@/components/tabs/TabsNav";
import { TabsNavItem } from "@/components/tabs/TabsNavItem";
import { TabsContainer } from "@/components/tabs/TabContainer";
import { TabItem } from "@/components/tabs/TabItem";
import { Form } from "@/components/form";
import { DadosPessoaisInsalt } from "./DadosPessoais";
import { DadosSaudeInsalt } from "./DadosSaude";
import { DadosJuridicosInsalt } from "./DadosJuridicos";
import { DadosSubstanciasPsicoInsalt } from "./DadosSubstanciasPsico";
import { DadosEstadoSocialInsalt } from "./DadosEstadoSocial";
import { TermosInsalt } from "./Termos";

export function InternoInsalt({idInterno,onDadosSalvos}: InternoInsaltProps) {
  const { formMethods } = useInternosInsalt({ idInterno, onDadosSalvos });
  const { handleSubmit,formState: { errors, isSubmitting } } = formMethods;

  const abasId = useMemo(() => setTabSufix({
    dadosPessoais: 'dadosPessoais',
    dadosSaude: 'dadosSaude',
    dadosVidaJuridica: 'dadosVidaJuridica',
    dadosSubstanciasPsico: 'dadosSubstanciasPsico',
    dadosEstadoSocial: 'dadosEstadoSocial',
    dadosVidaFamiliar: 'dadosVidaFamiliar',
    dadosTermos: 'dadosTermos',
  }), []);

  const tabsOptions = useTabs({ initalTab: abasId.dadosPessoais });

  const router = useRouter();
  const handleSalvar = () => {
  };

  return (
    <FormProvider {...formMethods}>
      <Form onSubmit={handleSubmit(handleSalvar)}>
          <TabsNav>
            <TabsNavItem {...tabsOptions} tabId={abasId.dadosPessoais}>Dados Pessoais</TabsNavItem>
            <TabsNavItem {...tabsOptions} tabId={abasId.dadosSaude}>Dados de Saúde</TabsNavItem>
            <TabsNavItem {...tabsOptions} tabId={abasId.dadosVidaJuridica} onClick={() => console.log(formMethods.getValues().foiPreso)}>Dados de Vida Jurídica</TabsNavItem>
            <TabsNavItem {...tabsOptions} tabId={abasId.dadosSubstanciasPsico}>Dados de Substâncias Psicoativas</TabsNavItem>
            <TabsNavItem {...tabsOptions} tabId={abasId.dadosEstadoSocial}>Dados de Estado Social</TabsNavItem>
            <TabsNavItem {...tabsOptions} tabId={abasId.dadosTermos}>Termos</TabsNavItem>
          </TabsNav>
          <TabsContainer>
            <TabItem {...tabsOptions} tabId={abasId.dadosPessoais}>
              <DadosPessoaisInsalt/>
            </TabItem>
            <TabItem {...tabsOptions} tabId={abasId.dadosSaude}>
              <DadosSaudeInsalt/>
            </TabItem>
            <TabItem {...tabsOptions} tabId={abasId.dadosVidaJuridica}>
              <DadosJuridicosInsalt/>
            </TabItem>
            <TabItem {...tabsOptions} tabId={abasId.dadosSubstanciasPsico}>
              <DadosSubstanciasPsicoInsalt/>
            </TabItem>
            <TabItem {...tabsOptions} tabId={abasId.dadosEstadoSocial}>
              <DadosEstadoSocialInsalt/>
            </TabItem>
            <TabItem {...tabsOptions} tabId={abasId.dadosTermos}>
              <TermosInsalt/>
            </TabItem>
          </TabsContainer>
          <div className="flex items-center justify-center mt-6">
            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-customGreen hover:bg-customGreenHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Salvar
            </button>
          </div>

      </Form>
    </FormProvider>

  );
}

const Input = FormInput<InternosInsaltSchema>;

export interface InternoInsaltProps {
  idInterno?: string;
  onDadosSalvos?: (interno: any, isNovo: boolean) => void;
}
