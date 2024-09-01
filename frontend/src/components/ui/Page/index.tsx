import { PropsWithChildren } from "react";

export function PageLayout({children, title}: PageLayoutProps){
    return (
        <div className="page-container">
            {title && <h1 className="page-title">{title}</h1>}
            <main className="page-content">
                {children}
            </main>

        </div>
    )
}


export interface PageLayoutProps extends PropsWithChildren {
    title?: string;
}
