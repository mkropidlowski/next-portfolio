import { FC, HTMLProps } from "react";
import clsx from "clsx";
import Link from "next/link";
import Button from "components/atoms/Button";
import { menuLinks, socialLinks } from "config/navbar/data";
import style from "./navbar.module.scss";
import Logo from "components/atoms/Logo";

export interface Props {
    links?: Props[];
    socialIcon?: Props[];
    text?: string;
}

const NavBar: FC<Props & HTMLProps<HTMLDivElement>> = ({ links = menuLinks, socialIcon = socialLinks, className }) => {
    return (
        <nav className={clsx(style.wrapper, className)}>
            <Logo />
            <ul className={style.menu}>
                {Object.values(links).map(({ id, text }) => {
                    const linksHref = `/#${id}`;
                    return (
                        <li key={text} className={style.menuLinks}>
                            <Link href={linksHref}>
                                <Button type="button" color="tertiary" buttonSize="medium" className={style.linkButton}>
                                    {text}
                                </Button>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <ul className={style.socialLinks}>
                {Object.values(socialIcon).map(({ id, icon }) => {
                    const linksHref = `${id}`;
                    return (
                        <li key={id} className={style.socialLinks}>
                            <Link href={linksHref}>{icon}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavBar;
