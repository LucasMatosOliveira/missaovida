import { DetailedHTMLProps } from "react";
import { concatClassNames } from "@/components/ui/classname-utils";

export function TabItem({tabId, active, className, isTabActive, children, ...props}: TabItemProps){
    if(isTabActive)
        active = isTabActive(tabId);
    return <div {...props} className={concatClassNames('tab-pane', active ? 'active show' : '', className)} id={tabId} role="tabpanel">{children}</div>;
}

export interface TabItemProps extends DetailedHTMLProps<React.FormHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   tabId: string;
   active?: boolean;
   isTabActive?: (tabId: string) => boolean;
}