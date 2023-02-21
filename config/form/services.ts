import { publicEnvs } from "./../envs";
import nodemailer from "nodemailer";

const EMAIL = `${publicEnvs.GMAIL_ADRESS}`;
const PASS = `${publicEnvs.GMAIL_PASSWORD}`;

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: EMAIL,
        pass: PASS,
    },
});
