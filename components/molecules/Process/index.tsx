import { FC } from "react";
import { ProcessMock } from "config/process/data";
import style from "./process.module.scss";

const Process: FC = () => {
    return (
        <div className={style.wrapper}>
            {ProcessMock.map((steps) => (
                <div key={steps.stepNumber} className={style.stepBox}>
                    <div className={style.titleBox}>
                        <h2 className={style.stepNumber}>{steps.stepNumber}</h2>
                        <h2 className={style.title}>{steps.title}</h2>
                    </div>
                    <div className={style.description}>
                        <p>{steps.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Process;
