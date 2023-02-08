import { ProjectColumnProps } from "components/molecules/Projects/types";
import Image from "next/legacy/image";
import Languageapp from "../projects/images/languageapp.png";

export const projectsMockup: ProjectColumnProps[] = [
    {
        heading: "Heading",
        subHeading: "Drugi heading",
        description: "jakiś tam super opis",
        buttonPrimary: "Source",
        buttonSecondary: "Live",
        sourceLink: "https://github.com/mkropidlowski",
        liveLink: "https://github.com/mkropidlowski",
        projectImg: <Image src={Languageapp} alt="LanguageApp" objectFit="cover" />,
    },
    {
        heading: "Heading_2",
        subHeading: "Drugi heading",
        description: "jakiś tam super opis",
        buttonPrimary: "Source",
        buttonSecondary: "Live",
        sourceLink: "https://github.com/mkropidlowski",
        liveLink: "https://github.com/mkropidlowski",
        projectImg: <Image src={Languageapp} alt="LanguageApp" objectFit="cover" />,
    },
    {
        heading: "Heading_3",
        subHeading: "Drugi heading",
        description: "jakiś tam super opis",
        buttonPrimary: "Source",
        buttonSecondary: "Live",
        sourceLink: "https://github.com/mkropidlowski",
        liveLink: "https://github.com/mkropidlowski",
        projectImg: <Image src={Languageapp} alt="LanguageApp" objectFit="cover" />,
    },
    {
        heading: "Heading_4",
        subHeading: "Drugi heading",
        description: "jakiś tam super opis",
        buttonPrimary: "Source",
        buttonSecondary: "Live",
        sourceLink: "https://github.com/mkropidlowski",
        liveLink: "https://github.com/mkropidlowski",
        projectImg: <Image src={Languageapp} alt="LanguageApp" objectFit="cover" />,
    },
];
