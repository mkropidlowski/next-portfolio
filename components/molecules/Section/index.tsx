import clsx from "clsx";
import { FC } from "react";
import { SectionProps } from "./types";
import style from "./section.module.scss";
import Heading from "components/atoms/Heading";
import Column from "./Column/Column";

const Section: FC<SectionProps> = ({ id, heading, visualContent, columnContent, className }) => {
    return (
        <section className={clsx(style.container, className)} id={id}>
            <Heading variant="h2" bold className={style.sectionHeading}>
                {heading}
            </Heading>
            <div className={style.content}>
                {columnContent ? (
                    <div className={style.contentColumn}>
                        <Column columnContent={columnContent} className={style.columnText} />
                    </div>
                ) : null}
                <div className={style.imgColumn}>{visualContent}</div>
            </div>
        </section>
    );
};

export default Section;
