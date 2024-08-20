'use client';

import { useRouter } from "next/navigation";
import { AppRoutes } from "@/commom/http/app-routes";

export default function Home() {
    const router = useRouter();

    router.push(AppRoutes.Login());
}
