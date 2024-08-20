'use client';

import { useEffect } from "react";
import { AppRoutes } from "@/commom/http/app-routes";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    router.push(AppRoutes.Login())
}
