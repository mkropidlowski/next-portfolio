import { Code } from "components/icons";
import { SectionProps } from "components/molecules/Section/types";
import { menuLinks } from "config/navbar/data";

const { about, project, offer, contact } = menuLinks ?? {};
export const SectionsContent: SectionProps[] = [
    {
        id: about.id,
        heading: "O mnie",
        columnContent: {
            columnHeading: "Junior Front-End Developer",
            description:
                "Cześć, nazywam się Michał Kropidłowski, zajmuję się tworzeniem stron internetowych, blogów, portolio czy te małych aplikacji do zarządania zasobami w Twoim biznensie. Jeśli chcesz posiadać własną stronę WWW bedącą reklamą lub prezentacją Twojego biznesu, skontaktuj się ze mną w celu omówienia szczegółów.",
            buttonPrimary: "Skontaktuj się po przez formularz!",
        },
        visualContent: <Code />,
    },
    {
        id: project.id,
        heading: "Projekty",
        columnContent: {
            columnHeading: "Column Heading _ Projekty",
            description: "OPIS OPIS projekt",
        },
    },
    {
        id: offer.id,
        heading: "Oferta",
        columnContent: {
            columnHeading: "Column Heading _ oferta",
            description: "OPIS OPIS O mnie",
        },
    },
    {
        id: contact.id,
        heading: "Kontakt",
    },
];
