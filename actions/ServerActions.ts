"use server";
import axios from "axios";

export async function verifyCaptcha(token: string | null) {
    try {
        const config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            },
        };

        const res = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
            config
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
