import dotenv from "dotenv";
dotenv.config();

export const {
    APP_URL,
    APP_PORT,
    APP_HOST,
    DEBUG_MODE,
    JWT_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET
} = process.env;