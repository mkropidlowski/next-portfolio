import { FC, ReactNode } from "react";
import NavBar from "../NavBar";
import style from "./pageLayout.module.scss";

interface Props {
    children: ReactNode;
}

const PageLayout: FC<Props> = ({ children }) => (
    <div className={style.wrapper}>
        <NavBar />
        <main className={style.container}>{children}</main>
    </div>
);

export default PageLayout;
