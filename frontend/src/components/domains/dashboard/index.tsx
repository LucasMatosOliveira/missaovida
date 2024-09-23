"use client";
import { DataTable } from "@/components/form/Grid";
import { createColumns, User } from "@/components/form/Grid/columns"; // Atualize para importar createColumns
import { useEffect, useState } from "react";
import { InternosApi } from "../formulario/internos.api";
import { authState } from "@/store/login";
import { useSnapshot } from "valtio";

export function DashboardGrid({ idInterno, onDadosSalvos, newTab }: DashboardProps) {
  const [userData, setUserData] = useState<User[]>([]);
  const state = useSnapshot(authState);

  useEffect(() => {
    const fetchData = async () => {
      const api = new InternosApi();
      const res = await api.getInternosForGrid(state.token!);
      const teste = await api.getInternoPorId(res[0].id_acolhido, state.token!);
      console.log({teste})
      setUserData(res);
    };

    fetchData();
  }, [state.token]);

  const handleAlterar = (id: string) => {
    console.log({id})
    console.log(newTab)
    newTab?.(id);
  };

  const columns = createColumns(handleAlterar);
  console.log({columns});

  return (
    <DataTable columns={columns} data={userData} actionsAddTab={newTab} onAlterar={handleAlterar} />
  );
}

export interface DashboardProps {
  idInterno?: string;
  onDadosSalvos?: (interno: any, isNovo: boolean) => void;
  newTab?: (idInterno: string) => void;
}
