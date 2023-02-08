import style from "./projects.module.scss";
import { projectsMockup } from "config/projects/data";
import { ProjectColumnProps } from "./types";
import { FC } from "react";
import ProjectCard from "./components/ProjectCard";

const Projects: FC<ProjectColumnProps> = () => (
    <div className={style.wrapper}>
        {projectsMockup.map(
            ({
                heading,
                subHeading,
                description,
                projectImg,
                buttonPrimary,
                buttonSecondary,
                sourceLink,
                liveLink,
            }) => (
                <ProjectCard
                    key={heading}
                    heading={heading}
                    description={description}
                    projectImg={projectImg}
                    buttonPrimary={buttonPrimary}
                    buttonSecondary={buttonSecondary}
                    sourceLink={sourceLink}
                    liveLink={liveLink}
                />
            )
        )}
    </div>
);

export default Projects;
