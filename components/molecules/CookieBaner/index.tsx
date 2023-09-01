import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import style from "./cookie.module.scss";
import Button from "components/atoms/Button";

const CookieBaner = () => {
    const [showBanner, setShowBanner] = useState(!Cookies.get("accept_cookies"));

    useEffect(() => {
        const acceptCookies = Cookies.get("accept_cookies");
        if (acceptCookies !== "true") {
            setShowBanner(true);
        }
    }, []);

    const handleAcceptCookies = () => {
        Cookies.set("accept_cookies", "true", { expires: 365 });
        setShowBanner(false);
    };

    if (!showBanner || typeof window === "undefined") {
        return null;
    }
    return (
        showBanner && (
            <div className={style.wrapper}>
                <p>Ta strona używa plików cookie. Klikając &quot;Akceptuj&quot;, wyrażasz zgodę na ich użycie.</p>
                <Button type="button" color="primary" onClick={handleAcceptCookies}>
                    Akceptuj
                </Button>
            </div>
        )
    );
};

export default CookieBaner;
