import { FC, HTMLProps } from "react";
import style from "./offer.module.scss";
import { servicesList } from "config/services/data";
import Heading from "components/atoms/Heading";
import clsx from "clsx";

export interface Props {
    services: Props[];
    imgMiniature?: Props[];
    heading?: string;
    description?: string;
}

const Offer: FC<Props & HTMLProps<HTMLDivElement>> = ({ services = servicesList, className }) => (
    <div className={clsx(style.wrapper, className)}>
        {Object.values(services).map(({ imgMiniature, heading, description }) => {
            return (
                <div key={heading} className={style.services}>
                    <div className={style.img}>{imgMiniature}</div>
                    <Heading variant="h4" bold className={style.heading}>
                        {heading}
                    </Heading>
                    <p className={style.description}>{description}</p>
                </div>
            );
        })}
    </div>
);

export default Offer;
