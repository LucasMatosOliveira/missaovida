"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { DashboardGrid } from "@/components/domains/dashboard";
import { PageLayout } from "@/components/ui/Page";

export default function Dashboard() {
    const { data: session, status } = useSession();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (status === "loading") {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    }, [status]);

    if (isLoading) {
        return <p>Carregando...</p>;
    }
    return (
        <>
            {session ? (
                <PageLayout>
                    <DashboardGrid />
                </PageLayout>
            ) : (
                <p>Por favor, faça login para acessar o Dashboard.</p>
            )}
        </>
    );
}
