import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from "@/providers/sessionProvider";
import { SpinnerProvider } from "@/contexts/SpinnerContext";
import { PreLoader } from "@/contexts/Loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Missão Vida",
    description: "Missão Vida",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NextAuthSessionProvider>
                    <SpinnerProvider>
                        <PreLoader />
                        {children}
                    </SpinnerProvider>
                </NextAuthSessionProvider>
            </body>
        </html>
    );
}
