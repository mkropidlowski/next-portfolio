import { ProjectColumnProps } from "components/molecules/Projects/types";
import Image from "next/image";
import Languageapp from "../projects/images/languageApp.png";
import Jobapp from "../projects/images/jobapp.png";
import TravelPortal from "../projects/images/travel.png";

export const projectsMockup: ProjectColumnProps[] = [
    {
        heading: "Strona szkoły językowej",
        description:
            "Strona posiada funkcjonalności takie jak, formularz kontaktowy, panel logowania dla administratora w którym po zalogowaniu posiada on dostęp do wysłanych e-maili, oraz opcje dodania posta do bloga, posty widoczne są na stronie głównej z możliością edycji oraz dodawania wyłącznie przez administatora.",
        buttonPrimary: "Source",
        buttonSecondary: "Live",
        sourceLink: "https://github.com/mkropidlowski/language-app",
        liveLink: "https://language-app-h7ab.vercel.app/",
        projectImg: <Image src={Languageapp} alt="LanguageApp" style={{ objectFit: "contain" }} fill priority />,
    },
    {
        heading: "Strona z ofertami pracy",
        description:
            "Strona posiada funkcjonalności takie jak, tablice o ofertami po wybraniu kazdej z ofert porzechodzimy to szczegółowego opisu, dodatkowo opcja dodania nowej oferty oraz formularz kontaktowy.",
        buttonPrimary: "Source",
        buttonSecondary: "Live",
        sourceLink: "https://github.com/mkropidlowski/jobs-portal",
        liveLink: "https://jobs-portal-seven.vercel.app/",
        projectImg: <Image src={Jobapp} alt="LanguageApp" style={{ objectFit: "contain" }} fill priority />,
    },
    {
        heading: "Portal turystyczny",
        description:
            "Funkcjonalności: przeglądanie aktualnych atrakcji, panel logowania i rejestracji, mozliwość dodawania i usuwania atakcji.",
        buttonPrimary: "Source",
        buttonSecondary: "Live",
        sourceLink: "https://github.com/mkropidlowski/travel-app",
        liveLink: "https://travel-app-five-sigma.vercel.app/",
        projectImg: <Image src={TravelPortal} alt="Travel Portal" style={{ objectFit: "contain" }} fill priority />,
    },
];
