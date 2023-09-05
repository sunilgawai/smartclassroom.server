import { PrismaClient } from "@prisma/client";

let db: PrismaClient;

declare global {
    var __database: PrismaClient | undefined;
}

if (!global.__database) {
    global.__database = new PrismaClient();
}

db = global.__database;

export { db }