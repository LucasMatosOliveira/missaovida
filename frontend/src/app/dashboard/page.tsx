"use client";

import { useState, useEffect, useMemo, ReactNode } from "react";
import { useSession } from "next-auth/react";
import { PageLayout } from "@/components/ui/Page";
import { AppRoutes } from "@/commom/http/app-routes";
import { useRouter } from "next/navigation";
import { useSpinner } from "@/contexts/SpinnerContext";
import { addTab } from "@/store/tabs";
import { createFakeTempGUID } from "@/commom/primitives/guid";
import { DashboardGrid } from "@/components/domains/dashboard";
import { InternoInsalt } from "@/components/domains/formulario";

export default function Dashboard() {
    const { showSpinner, hideSpinner } = useSpinner();
    const { data: session, status } = useSession();
    const id = useMemo(() => createFakeTempGUID(), []);
    const router = useRouter();
    const [isTabCreated, setIsTabCreated] = useState(false);

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

    const newTab = (content: ReactNode, title: string = "Novo Interno", isDefault: boolean = false) => {
        const newId = id.next();
        addTab(newId, title, content, isDefault);
    };

    console.log("Componente renderizado");

    useEffect(() => {
        if (session && !isTabCreated) {
            console.log("Criando nova aba padrão");
            const defaultContent = <DashboardGrid newTab={() => newTab(<InternoInsalt />)} />;
            newTab(defaultContent, "Internos", true);
            setIsTabCreated(true);
        }
    }, [session]);

    return (
        <PageLayout title="Dashboard">
            <DashboardGrid newTab={() => { newTab(<InternoInsalt />); }} />
        </PageLayout>
    );
}
