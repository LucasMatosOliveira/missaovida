import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AppState } from "..";

export interface AbasState {
  menuAbas: Record<string, MenuAbas>
}

export interface MenuAbas {
  abaAtivaId: string;
  abas: AbaMetadata[];
}

export interface AbaMetadata {
  id: string;
  menuId: string | null;
  titulo: string;
  props?: Record<string, any>
}

const initialState: AbasState = {
  menuAbas: {}
}

export const abasSlice = createSlice({
  name: "abas",
  initialState,
  reducers: {
    setMenuAbas(state, action: PayloadAction<{ menuId: string, metadata: MenuAbas }>) {
      const { menuId, metadata } = action.payload;
      state.menuAbas[menuId] = metadata;
    },
    setAbaAtiva(state, action: PayloadAction<{ menuId: string, abaAtivaId: string }>) {
      const { menuId, abaAtivaId } = action.payload;
      const metadata = state.menuAbas[menuId];
      if (!metadata)
        throw new Error("Abas não inicializadas. MenuId: " + menuId);

      metadata.abaAtivaId = abaAtivaId;
    },
    adicionarAba(state, action: PayloadAction<{ menuId: string, aba: AbaMetadata, isAtiva?: boolean }>) {
      const { menuId, aba, isAtiva } = action.payload;
      const metadata = state.menuAbas[menuId];
      if (!metadata)
        throw new Error("Abas não inicializadas. MenuId: " + menuId);

      metadata.abas.push(aba);

      if(isAtiva) 
        metadata.abaAtivaId = aba.id;
    },
    fecharAba(state, action: PayloadAction<{menuId: string, abaId: string}>){
      const {menuId, abaId} = action.payload;
      const metadata = state.menuAbas[menuId];
      if(!metadata)
        throw new Error("Abas não inicializadas. MenuId: " + menuId);

      metadata.abas = metadata.abas.filter(aba => aba.id !== abaId);
      if(metadata.abaAtivaId === abaId)
        metadata.abaAtivaId = metadata.abas[0]?.id ?? null;
    }
  }
});

export const { setMenuAbas, setAbaAtiva, adicionarAba, fecharAba } = abasSlice.actions;

export const selectAbaAtivaId = (menuId: string) => (state: AppState) => state.abas.menuAbas[menuId]?.abaAtivaId ?? null;
export const selectAbas = (menuId: string) => (state: AppState) => state.abas.menuAbas[menuId]?.abas ?? [];

export default abasSlice.reducer;