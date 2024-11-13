import Database from "better-sqlite3";


const db = new Database('./database.sqlite');

export const connectDB = () => {
    return db;
};
