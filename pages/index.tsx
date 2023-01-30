import PageLayout from "components/molecules/PageLayout";
import Hero from "components/organism/Hero";
import { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <PageLayout
            title="M.Kropidłowski - Usługi WWW"
            description="Tworzenie stron WWW, portfolio, blogów, aplikacji do zarządzania"
        >
            <Hero />
        </PageLayout>
    );
};

export default Home;
