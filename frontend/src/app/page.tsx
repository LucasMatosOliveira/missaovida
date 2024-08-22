'use client';

import { useRouter } from "next/navigation";
import { AppRoutes } from "@/commom/http/app-routes";
import { useEffect } from "react";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push(AppRoutes.Login());
    }, [router]);

    return null;
}
