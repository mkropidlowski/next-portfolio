import clsx from "clsx";
import Button from "components/atoms/Button";
import { Contact } from "components/icons";
import { FC, HTMLProps, useState } from "react";
import style from "./contactForm.module.scss";
import { formField } from "./data/data";
import { publicEnvs } from "config/envs";
import { sendContactForm } from "lib/api";

const EMAIL_ADRESS = `${publicEnvs.GMAIL_ADRESS}`;

const ContactForm: FC<HTMLProps<HTMLFormElement>> = ({}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const mail = {
            name,
            address: email,
            to: EMAIL_ADRESS,
            text: message,
        };
        try {
            await sendContactForm(mail);
            setIsLoading(true);
        } catch (error) {
            setError("Bład wysyłania.");
            setIsLoading(true);
        }
    };
    return (
        <div className={clsx(style.wrapper)}>
            <form className={style.form} onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <input
                        type="text"
                        className={style.formInput}
                        placeholder={formField.name}
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                </label>
                <label htmlFor="email">
                    <input
                        type="text"
                        className={style.formInput}
                        placeholder={formField.email}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </label>
                <label htmlFor="text">
                    <textarea
                        className={style.formTextArea}
                        placeholder={formField.text}
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        required
                    ></textarea>
                </label>
                <Button color="primary" buttonSize="medium" type="submit">
                    {isLoading ? formField.sending : formField.send}
                </Button>
                {error ? error : null}
            </form>
            <div className={style.image}>
                <Contact />
            </div>
        </div>
    );
};

export default ContactForm;
