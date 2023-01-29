import clsx from "clsx";
import { FC, HTMLProps } from "react";
import HeroImage from "./components/HeroImage";
import style from "./hero.module.scss";

interface Props {}

const Hero: FC<Props & HTMLProps<HTMLDivElement>> = ({ className }) => (
    <div className={clsx(style.wrapper, className)}>
        <HeroImage />
    </div>
);

export default Hero;
