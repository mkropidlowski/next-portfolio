import Image from "next/image";
import Github from "../../public/icon/github.png";
import Linkedin from "../../public/icon/linkedin.png";

export const menuLinks = {
    home: {
        id: "home",
        text: "Home",
    },
    about: {
        id: "about",
        text: "O mnie",
    },
    project: {
        id: "project",
        text: "Projekty",
    },
    offer: {
        id: "offer",
        text: "Oferta",
    },
    contact: {
        id: "contact",
        text: "Kontakt",
    },
};

export const socialLinks = {
    github: {
        id: "https://github.com/mkropidlowski",
        icon: <Image src={Github} alt="Github" />,
    },
    linkedin: {
        id: "https://www.linkedin.com/in/micha%C5%82-kropid%C5%82owski-455a1122a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvGOVfU4XQfaRbD%2BDRNhdMA%3D%3D",
        icon: <Image src={Linkedin} alt="Linkedin" />,
    },
};
