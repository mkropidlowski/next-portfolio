import { FC, HTMLProps, useEffect, useState } from "react";
import clsx from "clsx";
import { Link } from "components/atoms/Link";
import Button from "components/atoms/Button";
import { menuLinks, socialLinks } from "config/navbar/data";
import style from "./navbar.module.scss";
import Logo from "components/atoms/Logo";

export interface Props {
    links?: Props[];
    socialIcon?: Props[];
    text?: string;
    showMenu?: boolean;
}

const NavBar: FC<Props & HTMLProps<HTMLDivElement>> = ({
    links = menuLinks,
    socialIcon = socialLinks,

    className,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className={clsx(style.wrapper, className)}>
            <Logo className={clsx(style.logo)} />
            <div className={style.hamburgerIcon} onClick={handleMenuClick}>
                <div className={style.bar}></div>
                <div className={style.bar}></div>
                <div className={style.bar}></div>
            </div>
            <ul className={clsx(style.menu, isOpen ? style.open : "")}>
                {Object.values(links).map(({ id, text }) => {
                    const linksHref = `/#${id}`;
                    return (
                        <li key={text} className={style.menuLinks}>
                            <Link href={linksHref}>
                                <Button
                                    type="button"
                                    color="tertiary"
                                    buttonSize="medium"
                                    className={style.linkButton}
                                    onClick={handleLinkClick}
                                >
                                    {text}
                                </Button>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <ul className={clsx(style.socialLinksBox, isOpen ? style.open : "")}>
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
