import clsx from "clsx";
import Heading from "components/atoms/Heading";
import { FC, HTMLProps } from "react";
import style from "./heroHeading.module.scss";

const HeroHeading: FC<HTMLProps<HTMLDivElement>> = ({ className }) => {
    return (
        <div className={clsx(style.wrapper, className)}>
            <Heading variant="h1" className={style.heading} data-cy="heroHeading">
                Tworzenie stron internetowych, portfolio, blogów, aplikacji do zarządzania.
            </Heading>
        </div>
    );
};

export default HeroHeading;
