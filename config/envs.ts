export const publicEnvs = {
    GMAIL_ADRESS: process.env.NEXT_PUBLIC_AUTH_GMAIL as string,
    GMAIL_PASSWORD: process.env.NEXT_PUBLIC_AUTH_PASS as string,
    CYPRESS_BASE_URL: process.env.NEXT_CYPRESS_BASE_URL as string,
};

export const isDevServer = process.env.NODE_ENV === "development";
