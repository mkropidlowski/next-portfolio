/* eslint-disable */
import { defineConfig } from "cypress";
export default defineConfig({
    chromeWebSecurity: false,
    // viewportHeight: 1080,
    // viewportWidth: 1920,
    // video: false,
    e2e: {
        baseUrl: "http://localhost:3001/",
        viewportWidth: 1920,
        viewportHeight: 1080,
    },
    baseURL: "http://localhost:3001/",
    env: {
        BASE_URL: "http://localhost:3001/",
    },
});
