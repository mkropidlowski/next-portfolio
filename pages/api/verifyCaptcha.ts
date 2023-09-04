import { publicEnvs } from "config/envs";
("use server");
import axios from "axios";

const SECRET_KEY = publicEnvs.RECAPTCHA_SECRET_KEY;

export async function verifyCaptcha(token: string | null) {
    try {
        const res = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${token}`
        );

        if (res.data.success) {
            return "success!";
        } else {
            throw new Error("Failed Captcha");
        }
    } catch (error) {
        throw new Error(error.message);
    }
}
