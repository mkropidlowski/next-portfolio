import PageLayout from "components/molecules/PageLayout";
import Section from "components/molecules/Section";
import Hero from "components/organism/Hero";
import { SectionsContent } from "config/sections/data";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const CookieBaner = dynamic(() => import("components/molecules/CookieBaner"), { ssr: false });

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
            <CookieBaner />
        </PageLayout>
    );
};

export default Home;
