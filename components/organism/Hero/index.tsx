import clsx from "clsx";
import { FC, HTMLProps } from "react";
import HeroHeading from "./components/HeroHeading";
import HeroImage from "./components/HeroImage";
import style from "./hero.module.scss";

const Hero: FC<HTMLProps<HTMLDivElement>> = ({ className }) => (
    <div className={clsx(style.wrapper, className)}>
        <HeroImage />
        <HeroHeading />
    </div>
);

export default Hero;
