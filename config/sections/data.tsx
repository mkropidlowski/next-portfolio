import { SectionProps } from "components/molecules/Section/types";
import { menuLinks } from "config/navbar/data";

const { about, project, offer, contact } = menuLinks ?? {};
export const SectionsContent: SectionProps[] = [
    {
        id: about.id,
        heading: "O mnie",
        columnContent: {
            columnHeading: "Column Heading _ o mnie",
            description: "OPIS OPIS O mnie",
        },
        visualContent: "JAKIS IMG czy coś",
    },
    {
        id: project.id,
        heading: "Projekty",
        columnContent: {
            columnHeading: "Column Heading _ Projekty",
            description: "OPIS OPIS projekt",
        },
        visualContent: "JAKIS IMG czy coś",
    },
    {
        id: offer.id,
        heading: "Oferta",
        columnContent: {
            columnHeading: "Column Heading _ oferta",
            description: "OPIS OPIS O mnie",
        },
        visualContent: "JAKIS IMG czy coś",
    },
    {
        id: contact.id,
        heading: "Kontakt",
        visualContent: "JAKIS formularz wariacie",
    },
];
