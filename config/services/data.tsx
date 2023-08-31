import Image from "next/legacy/image";
import web from "./images/webDesign.png";
import care from "./images/care.png";
import tech from "./images/technologies.png";
import seo from "./images/seo.png";

export const servicesList = {
    website: {
        imgMiniature: <Image src={web} width={100} height={100} alt="Web site desing" />,
        heading: "Tworzenie stron WWW",
        description:
            "Wykonanie projektu strony WWW, bloga, strony typu Lading Page, wizytówki twojej firmy czy też systemu zarządania z panelem administacyjnym.",
    },
    seo: {
        imgMiniature: <Image src={seo} width={100} height={100} alt="Pozycjonowanie strony, SEO" />,
        heading: "SEO i pozycjonowanie strony",
        description:
            "Dzięki wykorzystaniu narzędzi Google które zapewniają pozycjonowanie strony w wyszukiwarce, zadbam o zgodność z wymaganiami SEO",
    },
    helpWithSite: {
        imgMiniature: <Image src={care} width={100} height={100} alt="Opieka stroną WWW" />,
        heading: "Opieka nad stroną",
        description: "Pełne wsparcie w razie jakichkolowiek problemów, dodawanie nowych funkcjonalności.",
    },
    setting: {
        imgMiniature: <Image src={tech} width={100} height={100} alt="Kupno domeny i wybór hostingu" />,
        heading: "Dobór hostigu, kupno domeny",
        description: "Pomogę Ci wybrać odpowiedni hosting oraz zarejstrować domenę.",
    },
};
