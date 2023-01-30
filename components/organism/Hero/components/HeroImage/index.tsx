import { FC } from "react";
import style from "./heroImage.module.scss";
import backgroundImg from "../../../../../public/icon/background.jpeg";
import Image from "next/legacy/image";

const HeroImage: FC = () => (
    <div className={style.image}>
        <Image
            src={backgroundImg}
            height={"800"}
            alt="Background img"
            layout="fixed"
            objectFit="cover"
            priority={true}
        />
    </div>
);
export default HeroImage;
