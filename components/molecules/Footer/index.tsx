import Heading from "components/atoms/Heading";
import style from "./footer.module.scss";

export const Footer = () => (
    <div className={style.wrapper}>
        <Heading variant="h4" className={style.heading}>
            Wykonał - Michał Kropidłowski 2023
        </Heading>
    </div>
);
