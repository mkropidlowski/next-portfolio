import { ProjectColumnProps } from "../../types";
import { FC } from "react";
import style from "./projectCard.module.scss";
import Heading from "components/atoms/Heading";
import { Link } from "components/atoms/Link";
import Button from "components/atoms/Button";
import clsx from "clsx";
import { motion } from "framer-motion";

const ProjectCard: FC<ProjectColumnProps> = ({
    heading,
    subHeading,
    description,
    buttonPrimary,
    buttonSecondary,
    projectImg,
    liveLink,
    sourceLink,
    className,
}) => (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={clsx(style.wrapper, className)}
    >
        <div className={style.item}>
            <div className={style.imgView}>{projectImg}</div>

            <div className={style.itemOverlay}>
                <Heading variant="h4" className={style.cardHeading}>
                    {heading}
                </Heading>
                <div className={style.itemBody}>
                    <div className={style.details}>
                        <Heading variant="h4" className={style.descriptionSubHeading}>
                            {subHeading}
                        </Heading>
                        <p className={style.description}>{description}</p>
                    </div>
                    <div className={style.links}>
                        <Link href={sourceLink}>
                            <Button color="secondary" buttonSize="medium" className={style.button}>
                                {buttonPrimary}
                            </Button>
                        </Link>
                        <Link href={liveLink}>
                            <Button color="primary" buttonSize="medium" className={style.button}>
                                {buttonSecondary}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

export default ProjectCard;
