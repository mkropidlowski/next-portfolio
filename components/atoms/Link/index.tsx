import { ComponentProps, FC, HTMLProps } from "react";
import LinkNext from "next/link";

interface LinkProps extends Omit<ComponentProps<typeof LinkNext>, "href"> {
    href: string;
    className?: string;
    icon?: JSX.Element;
}

export const Link: FC<LinkProps & HTMLProps<HTMLLinkElement>> = ({ href, target, children, className, ...rest }) => (
    <LinkNext href={href} {...rest} legacyBehavior>
        <a target={target} className={className}>
            {children}
        </a>
    </LinkNext>
);
