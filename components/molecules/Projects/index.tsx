import Image from "next/legacy/image";
import style from "./projects.module.scss";
import languageApp from "../../../public/icon/languageapp.png";

const Projects = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.projectBox}>
                <Image src={languageApp} alt="img" />
            </div>
            <div className={style.projectBox}>
                <Image src={languageApp} alt="img" />
            </div>
            <div className={style.projectBox}>
                <Image src={languageApp} alt="img" />
            </div>
            <div className={style.projectBox}>
                <Image src={languageApp} alt="img" />
            </div>
            <div className={style.projectBox}>
                <Image src={languageApp} alt="img" />
            </div>
            <div className={style.projectBox}>
                <Image src={languageApp} alt="img" />
            </div>
        </div>
    );
};

export default Projects;
