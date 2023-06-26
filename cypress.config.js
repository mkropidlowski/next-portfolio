/* eslint-disable */

import { defineConfig } from "cypress";

export default defineConfig({
    chromeWebSecurity: false,
    // viewportHeight: 1080,
    // viewportWidth: 1920,
    // video: false,
    e2e: {
        baseUrl: process.env.CYPRESS_BASE_URL,
        viewportWidth: 1920,
        viewportHeight: 1080,
    },
    baseURL: process.env.CYPRESS_BASE_URL,
    env: {
        BASE_URL: process.env.CYPRESS_BASE_URL,
    },
});
