"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { DashboardGrid } from "@/components/domains/dashboard";
import { PageLayout } from "@/components/ui/Page";
import { AppRoutes } from "@/commom/http/app-routes";
import { useRouter } from "next/navigation";
import { useSpinner } from "@/contexts/SpinnerContext";

export default function Dashboard() {
    const { showSpinner, hideSpinner } = useSpinner();
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "loading") {
            showSpinner();
        } else {
            hideSpinner();
        }

        if (!session && status !== "loading") {
            router.push(AppRoutes.Login());
        }
    }, [session, status, router, showSpinner, hideSpinner]);


    if (!session) return null;
    return (
        <PageLayout>
            <DashboardGrid />
        </PageLayout>

    );
}
