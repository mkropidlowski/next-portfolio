import { ProjectColumnProps } from "components/molecules/Projects/types";
import Image from "next/legacy/image";
import Languageapp from "../projects/images/languageapp.png";
import Jobapp from "../projects/images/jobapp.png";
import ShopImg from "../projects/images/shop_img.png";

export const projectsMockup: ProjectColumnProps[] = [
    {
        heading: "Strona szkoły językowej",
        description:
            "Strona posiada funkcjonalności takie jak, formularz kontaktowy, panel logowania dla administratora w którym po zalogowaniu posiada on dostęp do wysłanych e-maili, oraz opcje dodania posta do bloga, posty widoczne są na stronie głównej z możliością edycji oraz dodawania wyłącznie przez administatora.",
        buttonPrimary: "Source",
        buttonSecondary: "Live",
        sourceLink: "https://github.com/mkropidlowski/language-app",
        liveLink: "https://language-app-h7ab.vercel.app/",
        projectImg: <Image src={Languageapp} alt="LanguageApp" objectFit="cover" />,
    },
    {
        heading: "Strona z ofertami pracy",
        description:
            "Strona posiada funkcjonalności takie jak, tablice o ofertami po wybraniu kazdej z ofert porzechodzimy to szczegółowego opisu, dodatkowo opcja dodania nowej oferty oraz formularz kontaktowy.",
        buttonPrimary: "Source",
        buttonSecondary: "Live",
        sourceLink: "https://github.com/mkropidlowski/jobs-portal",
        liveLink: "https://jobs-portal-seven.vercel.app/",
        projectImg: <Image src={Jobapp} alt="LanguageApp" objectFit="cover" />,
    },
    {
        heading: "Sklep internetowy",
        description:
            "Strona posiada funkcjonalności takie jak, lista produtków dostępnych do kupienia, opcje dodania do koszyka, wykonanie płatności i wiele więcej.",
        buttonPrimary: "Source",
        buttonSecondary: "Live",
        sourceLink: "https://github.com/mkropidlowski/shop-project",
        liveLink: "https://shop-project-pink.vercel.app/",
        projectImg: <Image src={ShopImg} alt="LanguageApp" objectFit="cover" />,
    },
];
