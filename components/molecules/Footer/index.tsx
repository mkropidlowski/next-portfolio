import Heading from "components/atoms/Heading";
import style from "./footer.module.scss";
import { Link } from "components/atoms/Link";
import { EmailIcon, Phone } from "components/icons";

export const Footer = () => (
    <div className={style.wrapper}>
        <div className={style.contactHeading}>
            <EmailIcon width={25} height={25} />
            <Heading variant="h5" bold>
                mkropidlowsky@gmail.com
            </Heading>
        </div>
        <div className={style.contactHeading}>
            <Phone width={25} height={25} />
            <Heading variant="h5" bold>
                +48 789 291 009
            </Heading>
        </div>
        <Heading variant="h4" className={style.heading}>
            Wykonał - Michał Kropidłowski 2023
        </Heading>
        <div>
            <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
        </div>
    </div>
);
