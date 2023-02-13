import clsx from "clsx";
import Button from "components/atoms/Button";
import { Contact } from "components/icons";
import { FC, HTMLProps } from "react";
import style from "./contactForm.module.scss";
import { fromField } from "./data/data";

const ContactForm: FC<HTMLProps<HTMLFormElement>> = ({}) => {
    return (
        <div className={clsx(style.wrapper)}>
            <form className={style.form}>
                <label htmlFor="name">
                    <input type="text" className={style.formInput} placeholder={fromField.name} />
                </label>
                <label htmlFor="email">
                    <input type="text" className={style.formInput} name="" id="" placeholder={fromField.email} />
                </label>
                <label htmlFor="text">
                    <textarea className={style.formTextArea} name="" id="" placeholder={fromField.text}></textarea>
                </label>
                <Button color="primary" buttonSize="medium">
                    {fromField.send}
                </Button>
            </form>
            <div className={style.image}>
                <Contact />
            </div>
        </div>
    );
};

export default ContactForm;
