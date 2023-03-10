import { ProjectColumnProps } from "components/molecules/Projects/types";
import Image from "next/legacy/image";
import Languageapp from "../projects/images/languageapp.png";

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
];
