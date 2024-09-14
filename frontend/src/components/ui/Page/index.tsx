import { PropsWithChildren } from "react";
import { Header } from "../Header";

export function PageLayout({ children, title }: PageLayoutProps) {
    return (
        <>

            <div className="page-container">
                <Header pageTitle="Dashboard"/>
                {title && <h1 className="page-title">{title}</h1>}
                <div className="page-content mt-4">
                    {children}
                </div>
            </div>
        </>
    )
}


export interface PageLayoutProps extends PropsWithChildren {
    title?: string;
}
