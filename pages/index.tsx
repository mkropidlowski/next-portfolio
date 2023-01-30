import PageLayout from "components/molecules/PageLayout";
import Section from "components/molecules/Section";
import Hero from "components/organism/Hero";
import { SectionsContent } from "config/sections/data";
import { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <PageLayout
            title="mKropidłowski - Usługi WWW"
            description="Tworzenie stron WWW, portfolio, blogów, aplikacji do zarządzania"
        >
            <Hero />
            {SectionsContent.map(({ ...props }) => (
                <Section key={props.id} className={""} {...props} />
            ))}
        </PageLayout>
    );
};

export default Home;
