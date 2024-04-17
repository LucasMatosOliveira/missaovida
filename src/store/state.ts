import { proxy } from "valtio";

export const abaCadastro = proxy<AbaCadastro>({
  aba: false
});

export interface AbaCadastro {
  aba: boolean;
}