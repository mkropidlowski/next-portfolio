import clsx from "clsx";
import React, { FC, HTMLProps } from "react";
import style from "./button.module.scss";

export interface Props {
    buttonSize?: "big" | "medium" | "small";
    color?: "primary" | "secondary" | "tertiary";
    type?: "submit" | "button" | "reset";
    className?: string;
    children?: React.ReactNode;
}

const Button: FC<Props & HTMLProps<HTMLButtonElement>> = ({
    color = "primary",
    buttonSize = "medium",
    type = "button",
    className,
    children,
    ...rest
}) => (
    <button type={type} color={color} className={(clsx(style.button), className)} {...rest}>
        <span>{children}</span>
    </button>
);

export default Button;
