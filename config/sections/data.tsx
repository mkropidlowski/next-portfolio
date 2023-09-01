import { Code } from "components/icons";
import ContactForm from "components/molecules/ContactForm";
import Offer from "components/molecules/Offer";
import Process from "components/molecules/Process";
import Projects from "components/molecules/Projects";
import { SectionProps } from "components/molecules/Section/types";
import { menuLinks } from "config/navbar/data";

const { about, project, offer, contact, howWeWork } = menuLinks ?? {};
export const SectionsContent: SectionProps[] = [
    {
        id: about.id,
        heading: "O mnie",
        columnContent: {
            columnHeading: "Junior Front-End Developer",
            description:
                "Cześć, nazywam się Michał Kropidłowski, zajmuję się tworzeniem stron internetowych, blogów, portolio czy też małych aplikacji do zarządania zasobami w Twoim biznensie. Jeśli chcesz posiadać własną stronę WWW bedącą reklamą lub prezentacją Twojego biznesu, skontaktuj się ze mną w celu omówienia szczegółów.",
            buttonPrimary: "Skontaktuj się poprzez formularz!",
            formHref: "#contact",
        },
        shouldBeRow: false,
        visualContent: <Code />,
    },
    {
        id: project.id,
        heading: "Projekty",
        columnContent: {
            // columnHeading: "Przy współpracy z klientami udało się dotychczas zrealizować kilka projektów..",
        },
        visualContent: <Projects />,
        shouldBeRow: true,
    },
    {
        id: howWeWork.id,
        heading: "Jak działamy?",
        columnContent: {
            subHeading: "Krok po kroku budujemy Twoją stronę",
        },
        visualContent: <Process />,
        shouldBeRow: true,
    },
    {
        id: offer.id,
        heading: "Usługi",
        columnContent: {
            subHeading: "Sprawdź i skorzystaj z dobranej pod Twoje potrzeby oferty w której skład wchodzi m.in",
        },
        visualContent: <Offer />,
        shouldBeRow: true,
    },
    {
        id: contact.id,
        heading: "Kontakt",
        visualContent: <ContactForm />,
    },
];
