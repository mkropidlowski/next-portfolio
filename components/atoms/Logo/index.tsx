import { FC, HTMLProps } from "react";
import clsx from "clsx";
import Link from "next/link";
import Heading from "../Heading";
import style from "./logo.module.scss";

interface Props {
    className?: string;
}
const Logo: FC<Props & HTMLProps<HTMLDivElement>> = ({ className }) => (
    <div className={clsx(style.logo, className)}>
        <Link href="/">
            <Heading variant="h4" className={style.logoText}>
                &lt;/ mKropidlowski.pl &gt;
            </Heading>
        </Link>
    </div>
);

export default Logo;
