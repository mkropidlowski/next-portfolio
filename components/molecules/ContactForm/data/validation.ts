import * as yup from "yup";

const schema = {
    max80Characters: "E-mail jest zbyt długi",
};

export const validationSchema = yup.object().shape({
    name: yup.string().required("Pole imię i nazwisko jest wymagane."),
    email: yup
        .string()
        .required("Pole email jest wymagane.")
        .email("Wprowadź poprawny adres e-mail.")
        .trim()
        .max(80, schema.max80Characters),
    message: yup.string().required("Pole wiadomość jest wymagane."),
});
