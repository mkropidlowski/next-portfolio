import clsx from "clsx";
import React, { FC, HTMLProps } from "react";
import style from "./button.module.scss";
import capitalize from "lodash.capitalize";

export interface Props {
    buttonSize?: "big" | "medium" | "small";
    color?: "primary" | "secondary" | "tertiary";
    variant?: "default" | "blank";
    type?: "submit" | "button" | "reset";
    className?: string;
    children?: React.ReactNode;
}

const Button: FC<Props & HTMLProps<HTMLButtonElement>> = ({
    color = "primary",
    buttonSize = "medium",
    type = "button",
    variant = "default",
    className,
    children,
    ...rest
}) => (
    <button
        type={type}
        color={color}
        className={clsx(
            style.button,
            style[`button${capitalize(variant)}__${capitalize(color)}`],
            style[`${buttonSize}`],
            className
        )}
        {...rest}
    >
        <span>{children}</span>
    </button>
);

export default Button;
