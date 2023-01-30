import clsx from "clsx";
import Heading from "components/atoms/Heading";
import { FC, HTMLProps } from "react";
import style from "../HeroHeading/heroHeading.module.scss";

interface Props {}

const HeroHeading: FC<Props & HTMLProps<HTMLDivElement>> = ({ className }) => {
    return (
        <div className={clsx(style.wrapper, className)}>
            <Heading variant="h1" className={style.heading}>
                Tworzenie stron internetowych, portfolio, blogów, aplikacji do zarządzania.
            </Heading>
        </div>
    );
};

export default HeroHeading;
