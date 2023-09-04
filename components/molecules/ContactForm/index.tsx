import clsx from "clsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "components/atoms/Button";
import { Contact } from "components/icons";
import { FC, useState, useRef } from "react";
import style from "./contactForm.module.scss";
import { formField, formStatusCode, ResponseStatus } from "./data/data";
import { sendContactForm } from "lib/api";
import { validationSchema } from "./data/validation";
import { ContactFormProps } from "./types";
import { LabelText } from "components/atoms/Label";
import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from "actions/ServerActions";
import { publicEnvs } from "config/envs";

const SITE_KEY = publicEnvs.RECAPTCHA_WEB_KEY;

const ContactForm: FC = () => {
    const [responseStatus, setResponseStatus] = useState<ResponseStatus>(null);
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    async function handleCaptchaSubmission(token: string | null) {
        await verifyCaptcha(token)
            .then(() => setIsVerified(true))
            .catch(() => setIsVerified(false));
    }

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<ContactFormProps>({
        mode: "all",
        resolver: yupResolver(validationSchema),
    });

    const submitForm = async () => {
        const formData = getValues();
        setResponseStatus("pending");

        const data = {
            ...formData,
        };
        try {
            await sendContactForm(data);
            setResponseStatus("sent");
        } catch (error) {
            setResponseStatus("error");
        }
    };
    return (
        <div className={clsx(style.wrapper)} id="contact">
            <form
                className={style.form}
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(submitForm)();
                }}
                data-cy="contactForm"
            >
                <LabelText>
                    <input
                        type="text"
                        className={style.formInput}
                        placeholder={formField.name}
                        {...register("name")}
                        data-cy="userName"
                    />
                    {errors.name && <p className={style.errorText}>{errors.name?.message}</p>}
                </LabelText>
                <LabelText>
                    <input
                        type="text"
                        className={style.formInput}
                        placeholder={formField.email}
                        {...register("email")}
                        data-cy="emailAdress"
                    />
                    <p className={style.errorText}>{errors.email?.message}</p>
                </LabelText>

                <LabelText>
                    <textarea
                        className={style.formTextArea}
                        placeholder={formField.text}
                        {...register("message")}
                        data-cy="userMessage"
                    ></textarea>
                    <p className={style.errorText}>{errors.message?.message}</p>
                </LabelText>

                <ReCAPTCHA sitekey={SITE_KEY} ref={recaptchaRef} onChange={handleCaptchaSubmission}>
                    <Button
                        color="primary"
                        buttonSize="medium"
                        type="submit"
                        data-cy="submitFormButton"
                        disabled={!isVerified}
                        className={style.captchaBox}
                    >
                        {formStatusCode[responseStatus] ?? formStatusCode.default}
                    </Button>
                </ReCAPTCHA>
            </form>
            <div className={style.image}>
                <Contact />
            </div>
        </div>
    );
};

export default ContactForm;
