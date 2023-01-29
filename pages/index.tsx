import PageLayout from "components/molecules/PageLayout";
import Hero from "components/organism/Hero";
import { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <PageLayout>
            <Hero />
        </PageLayout>
    );
};

export default Home;
