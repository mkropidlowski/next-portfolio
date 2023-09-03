export const formField = {
    name: "Imię i nazwisko",
    email: "Adres e-mail",
    text: "Twoja wiadomość",
    phone: "Numer telefonu",
};

export type ResponseStatus = "pending" | "sent" | "error";

export const formStatusCode = {
    pending: "Wysyłanie..",
    sent: "Wysłano :-)",
    default: "Wyślij wiadomość",
};
