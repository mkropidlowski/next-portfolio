import { FC } from "react";
import style from "./heroImage.module.scss";
import backgroundImg from "../../../../../public/icon/background.jpeg";
import Image from "next/legacy/image";

const HeroImage: FC = () => (
    <div className={style.image}>
        <Image src={backgroundImg} alt="Background img" layout="fill" objectFit="cover" priority={true} />
    </div>
);
export default HeroImage;
