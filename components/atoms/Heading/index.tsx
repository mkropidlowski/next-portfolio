import clsx from "clsx";
import { FC, HTMLProps } from "react";
import style from "./heading.module.scss";

export type HeadingVariant = "h1" | "h2" | "h3" | "h4" | "h5";
interface Props extends HTMLProps<HTMLHeadingElement> {
    variant?: HeadingVariant;
    bold?: boolean;
    className?: string;
}

const Heading: FC<Props> = ({ variant, bold = false, children, className, ...rest }) => {
    const HeadingVariant = variant;
    return (
        <HeadingVariant className={clsx(style[`${variant}`], bold && style.bold, className)} {...rest}>
            {children}
        </HeadingVariant>
    );
};

export default Heading;
