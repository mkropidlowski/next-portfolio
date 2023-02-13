import SeoData from "components/atoms/SeoData";
import { FC, ReactNode } from "react";
import { Footer } from "../Footer";
import NavBar from "../NavBar";
import style from "./pageLayout.module.scss";

interface Props {
    children: ReactNode;
    title: string;
    description: string;
}

const PageLayout: FC<Props> = ({ title, description, children }) => (
    <div className={style.wrapper}>
        <SeoData title={title} description={description} />
        <NavBar />
        <main className={style.container}>{children}</main>
        <Footer />
    </div>
);

export default PageLayout;
