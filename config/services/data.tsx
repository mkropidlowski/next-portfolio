import Image from "next/legacy/image";
import web from "./images/webDesign.png";
import care from "./images/care.png";
import tech from "./images/technologies.png";
import seo from "./images/seo.png";

export const servicesList = {
    website: {
        imgMiniature: <Image src={web} alt="Web site desing" />,
        heading: "Tworzenie stron WWW",
        description:
            "Wykonanie projektu strony WWW, bloga, strony typu Lading Page, wizytówki twojej firmy czy też systemu zarządania z panelem administacyjnym.",
    },
    helpWithSite: {
        imgMiniature: <Image src={care} alt="Opieka stroną WWW" />,
        heading: "Opieka stroną WWW",
        description: "Opieka stroną po tej stworzeniu, dodawanie nowych funkcjonalności.",
    },
    setting: {
        imgMiniature: <Image src={tech} alt="Kupno domeny i wybór hostingu" />,
        heading: "Dobór hostigu, kupno domeny",
        description: "Pomogę Ci wybrać odpowiedni hosting oraz kupię domenę z interesującą Cię nazwą.",
    },
    seo: {
        imgMiniature: <Image src={seo} alt="Pozycjonowanie strony, SEO" />,
        heading: "SEO i pozycjonowanie strony",
        description:
            "Dzięki wykorzystaniu narzędzi Google które zapewniają pozycjonowanie strony w wyszukiwarce, zadbam o zgodność z wymaganiami SEO",
    },
};
