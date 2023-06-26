import clsx from "clsx";
import { FC } from "react";
import { SectionProps } from "./types";
import style from "./section.module.scss";
import Heading from "components/atoms/Heading";
import Column from "./Column/Column";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Section: FC<SectionProps> = ({ id, heading, visualContent, columnContent, shouldBeRow, className }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <section className={clsx(style.container, className)} id={id} ref={ref}>
            <Heading variant="h2" bold className={style.sectionHeading}>
                {heading}
            </Heading>
            <div
                style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
                className={clsx(style.content, shouldBeRow && style.columnContentView)}
            >
                {columnContent ? (
                    <div className={style.contentColumn}>
                        <Column columnContent={columnContent} className={style.columnText} />
                    </div>
                ) : null}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{}}
                    className={style.imgColumn}
                >
                    {visualContent}
                </motion.div>
            </div>
        </section>
    );
};

export default Section;
