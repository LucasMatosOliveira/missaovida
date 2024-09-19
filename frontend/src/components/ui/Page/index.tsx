import { PropsWithChildren, ReactNode } from "react";
import { Header } from "../Header";
import { useSnapshot } from "valtio";
import { tabsState, setActiveTab, closeTab } from "@/store/tabs";

export function PageLayout({ children, title }: PageLayoutProps) {
    const snapshot = useSnapshot(tabsState);

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    const handleTabClose = (tabId: string, event: React.MouseEvent) => {
        event.stopPropagation();
        closeTab(tabId);
    };

    const activeTabContent = snapshot.activeTabId
        ? snapshot.tabs.find(tab => tab.id === snapshot.activeTabId)?.props || <p>Nenhum conteúdo disponível</p>
        : <p>Nenhuma aba ativa</p>;

    console.log(snapshot)

    return (
        <div className="page-container">
            <Header pageTitle={title} className="mb-5" />
            <section className='py-24 bg-white flex justify-center items-center' style={{ backgroundColor: 'rgb(243, 244, 246)' }}>
                <div className='container bg-white p-3 rounded-lg text-black custom-border'>
                    <div className="tabs-container ">
                        {snapshot.tabs.map((tab) => (
                            <div key={tab.id} className="tab-item" onClick={() => handleTabClick(tab.id)}>
                                <span className="tab-title">{tab.title}</span>
                                {!tab.isDefault && <button className="tab-close-button" onClick={(e) => handleTabClose(tab.id, e)}>×</button>}
                            </div>
                        ))}
                    </div>
                    <div >
                        {activeTabContent as ReactNode}
                    </div>
                </div>
            </section>
        </div>
    );
}

export interface PageLayoutProps extends PropsWithChildren {
    title?: string;
}
