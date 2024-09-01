import { DetailedHTMLProps } from "react";
import { concatClassNames } from "@/components/ui/classname-utils";

export function TabsContainer({ className, children, ...props }: DetailedHTMLProps<React.FormHTMLAttributes<HTMLDivElement>, HTMLDivElement>) {

    return <div {...props} className={concatClassNames('tab-content  p-20', className)}>{children}</div>;
}