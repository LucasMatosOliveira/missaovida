import { concatClassNames } from "@/components/ui/classname-utils";
import { DetailedHTMLProps, FormHTMLAttributes } from "react";

export function TabsNav({className, children, ...props}: DetailedHTMLProps<FormHTMLAttributes<HTMLUListElement>, HTMLUListElement>) {
    return <ul className={concatClassNames("nav nav-tabs", className)} {...props}>{children}</ul>
}