import PageLayout from "components/molecules/PageLayout";
import Section from "components/molecules/Section";
import Hero from "components/organism/Hero";
import { SectionsContent } from "config/sections/data";
import { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <PageLayout
            title="Michał Kropidłowski - Tworzenie i obsługa stron internetowych."
            description="Tworzenie stron WWW, portfolio, blogów, aplikacji do zarządzania zgodnych ze standardami oraz wymaganiami klientów."
        >
            <Hero />
            {SectionsContent.map(({ ...props }) => (
                <Section key={props.id} {...props} />
            ))}
        </PageLayout>
    );
};

export default Home;
