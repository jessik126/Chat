import "reflect-metadata";
import express, { Application } from "express";
import cors from 'cors'

import connection from "./database/db";
import userController from "./controllers/userController"
import messageController from "./controllers/messageController";

import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(cors({
    origin: ['http://localhost:3000']
}))

app.use("/", userController);
app.use("/", messageController);

const PORT = parseInt(`${process.env.PORT || 3000}`);
const start = async (): Promise<void> => {
    try {
        await connection.sync();
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}; 

void start();

export default app;