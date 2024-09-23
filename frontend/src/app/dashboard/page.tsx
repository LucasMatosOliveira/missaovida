"use client";

import { useState, useEffect, useMemo, ReactNode } from "react";
import { useSession } from "next-auth/react";
import { PageLayout } from "@/components/ui/Page";
import { AppRoutes } from "@/commom/http/app-routes";
import { useRouter } from "next/navigation";
import { useSpinner } from "@/contexts/SpinnerContext";
import { addTab, tabsState } from "@/store/tabs";
import { createFakeTempGUID } from "@/commom/primitives/guid";
import { DashboardGrid } from "@/components/domains/dashboard";
import { InternoInsalt } from "@/components/domains/formulario";
import { useSnapshot } from "valtio";

export default function Dashboard() {
    const { showSpinner, hideSpinner } = useSpinner();
    const { data: session, status } = useSession();
    const id = useMemo(() => createFakeTempGUID(), []);
    const router = useRouter();
    const [isTabCreated, setIsTabCreated] = useState(false);

    const snapshot = useSnapshot(tabsState);

    useEffect(() => {
        if (status === "loading") {
            showSpinner();
        } else {
            hideSpinner();
            if (!session) {
                router.push(AppRoutes.Login());
            }
        }
    }, [session, status, router, showSpinner, hideSpinner]);

    const newTab = ({ content, title = "Novo Interno", isDefault = false, idInterno}: {
        content: ReactNode; title?: string; isDefault?: boolean; idInterno?: string;}) => {
        const newId = id.next();
        addTab(newId, title, content, isDefault);
      };

    console.log("Componente renderizado");

    useEffect(() => {
        if (session && !isTabCreated) {
            console.log("Criando nova aba padrão");
            const defaultContent = <DashboardGrid newTab={(idInterno) => newTab({content: <InternoInsalt idInterno={idInterno}/>})} />;
            newTab({content: defaultContent, title: "Internos", isDefault: true});
            setIsTabCreated(true);
        }
    }, [session]);

    const activeTab = snapshot.tabs.find(tab => tab.id === snapshot.activeTabId);
    const pageTitle = activeTab?.isDefault ? "Dashboard" : "Interno";

    return (
        <PageLayout title={pageTitle}>

        </PageLayout>
    );
}
