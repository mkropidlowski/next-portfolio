import Heading from "components/atoms/Heading";
import style from "./footer.module.scss";
import { Link } from "components/atoms/Link";

export const Footer = () => (
    <div className={style.wrapper}>
        <Heading variant="h4" className={style.heading}>
            Wykonał - Michał Kropidłowski 2023
        </Heading>
        <div>
            <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
        </div>
    </div>
);
