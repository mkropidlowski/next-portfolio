import { ProjectColumnProps } from "components/molecules/Projects/types";
import Image from "next/image";
import Languageapp from "../projects/images/languageapp.png";
import Jobapp from "../projects/images/jobapp.png";
import Hairdresser from "../projects/images/hairdresser.png";
import TravelPortal from "../projects/images/travel.png";
import Botricho from "../projects/images/botricho.png";
import NewsPage from "../projects/images/newspage.png";

export const projectsMockup: ProjectColumnProps[] = [
    {
        heading: "Salon trychologiczny Botricho.pl",
        description:
            "Strona posiada funkcjonalności takie jak, panel logowania dla administratora w którym po zalogowaniu posiada on dostęp do usług dostępnych w salonie oraz opcje ich dodawania, usuwania, edytowania.",
        buttonPrimary: "Source",
        buttonSecondary: "Live",
        sourceLink: "https://github.com/mkropidlowski/botricho-page",
        liveLink: "https://botricho.pl",
        projectImg: <Image src={Botricho} alt="Botricho" style={{ objectFit: "contain" }} fill priority />,
    },
    {
        heading: "Szkoła językowa abcfc.pl",
        description:
            "Projekt strony, przedstawiający ofertę szkoły językowej, na stronie znajdziemy formularz kontaktowy, mapkę dojazdu, czy sekcję informacyjną gdzie zarządzający ma mozliwości dodawania plików dla rodziców czy uczniów.",
        buttonPrimary: "Source",
        buttonSecondary: "Live",
        sourceLink: "https://github.com/mkropidlowski/language-app",
        liveLink: "https://abcfc.pl",
        projectImg: <Image src={Languageapp} alt="ABCFC" style={{ objectFit: "contain" }} fill priority />,
    },
    {
        heading: "Portal turystyczny - projekt",
        description:
            "Funkcjonalności: przeglądanie aktualnych atrakcji, panel logowania i rejestracji, możliwość dodawania i usuwania atrakcji.",
        buttonPrimary: "Source",
        buttonSecondary: "Live",
        sourceLink: "https://github.com/mkropidlowski/travel-app",
        liveLink: "https://travel-app-five-sigma.vercel.app/",
        projectImg: <Image src={TravelPortal} alt="Travel Portal" style={{ objectFit: "contain" }} fill priority />,
    },
    {
        heading: "Strona z newsami",
        description:
            "Projekt tworzony w ramach nauki technologii front-endowych, dzięki własnemu API, użytkownik ma możliwość przeglądania wiadomości ze świata, wiadomości podzielone są równiez na kategorie tematyczne.",
        buttonPrimary: "Source",
        buttonSecondary: "Live",
        sourceLink: "https://github.com/mkropidlowski/newspage",
        liveLink: "https://newspage-bay.vercel.app/",
        projectImg: <Image src={NewsPage} alt="News Page" style={{ objectFit: "contain" }} fill priority />,
    },
    {
        heading: "Strona z ofertami pracy - projekt",
        description:
            "Projekt tworzony w ramach nauki,  posiada funkcjonalności takie jak, tablice o ofertami po wybraniu kazdej z ofert przechodzimy to szczegółowego opisu, dodatkowo opcja dodania nowej oferty oraz formularz kontaktowy.",
        buttonPrimary: "Source",
        buttonSecondary: "Live",
        sourceLink: "https://github.com/mkropidlowski/jobs-portal",
        liveLink: "https://jobs-portal-seven.vercel.app/",
        projectImg: <Image src={Jobapp} alt="Jobs Portal" style={{ objectFit: "contain" }} fill priority />,
    },

    // {
    //     heading: "Landing Page",
    //     description: "Strona portfolio salonu fryzjerskiego, zawierająca informacje o firmie, projekty, cennik.",
    //     buttonPrimary: "Source",
    //     buttonSecondary: "Live",
    //     sourceLink: "https://github.com/mkropidlowski/hairdresser-website",
    //     liveLink: "https://hairdresser-website.vercel.app/",
    //     projectImg: <Image src={Hairdresser} alt="Travel Portal" style={{ objectFit: "contain" }} fill priority />,
    // },
];
