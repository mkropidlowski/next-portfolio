import clsx from "clsx";
import style from "./label.module.scss";
import { FC, HTMLProps } from "react";

export const LabelText: FC<HTMLProps<HTMLDivElement>> = ({ children, className, ...rest }) => (
    <div className={clsx(style.label, className)} {...rest}>
        {children}
    </div>
);
