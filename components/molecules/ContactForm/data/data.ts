export const formField = {
    name: "Imię i nazwisko",
    email: "Adres e-mail",
    text: "Twoja wiadomość",
};

export type ResponseStatus = "pending" | "sent" | "error";

export const formStatusCode = {
    pending: "Wysyłanie..",
    sent: "Wysłano :-)",
    default: "Wyślij wiadomość",
};
