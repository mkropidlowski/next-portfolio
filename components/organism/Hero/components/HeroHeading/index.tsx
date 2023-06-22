import clsx from "clsx";
import Heading from "components/atoms/Heading";
import { FC, HTMLProps } from "react";
import style from "./heroHeading.module.scss";
import { motion } from "framer-motion";

const HeroHeading: FC<HTMLProps<HTMLDivElement>> = ({ className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 175 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={clsx(style.wrapper, className)}
        >
            <Heading variant="h1" className={style.heading} data-cy="heroHeading">
                Tworzenie stron internetowych, portfolio, blogów, aplikacji do zarządzania.
            </Heading>
        </motion.div>
    );
};

export default HeroHeading;
