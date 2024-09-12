import { PropsWithChildren } from "react";
import { Header } from "../Header";

export function PageLayout({ children, title }: PageLayoutProps) {
    return (
        <>
            <Header />
            <div className="page-container">
                {title && <h1 className="page-title">{title}</h1>}
                <main className="">
                    {children}
                </main>

            </div>
        </>
    )
}


export interface PageLayoutProps extends PropsWithChildren {
    title?: string;
}
