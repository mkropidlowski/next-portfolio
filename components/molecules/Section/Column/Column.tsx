import clsx from "clsx";
import Button from "components/atoms/Button";
import Heading from "components/atoms/Heading";
import Link from "next/link";
import { ColumnDataProps } from "../types";
import style from "./column.module.scss";

export interface Props {
    columnContent: ColumnDataProps;
    className?: string;
}

const Column = ({ columnContent, className }) => {
    const { columnHeading, subHeading, description, buttonPrimary, buttonSecondary } = columnContent ?? {};

    return (
        <div className={clsx(style.container, className)}>
            {columnHeading ? (
                <Heading variant="h3" className={style.heading}>
                    {columnHeading}
                </Heading>
            ) : null}
            {subHeading ? (
                <Heading variant="h3" className={style.subHeading}>
                    {subHeading}
                </Heading>
            ) : null}
            <p className={style.description}>{description}</p>
            {buttonPrimary ? (
                <div className={style.buttonBox}>
                    <Link href="/">
                        <Button color="primary">{buttonPrimary}</Button>
                    </Link>
                    {buttonSecondary ? (
                        <Link href="/">
                            <Button color="secondary">{buttonSecondary}</Button>
                        </Link>
                    ) : null}
                </div>
            ) : null}
        </div>
    );
};

export default Column;
