import * as dotenv from 'dotenv';
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import taskRoutes from './routes/tasks.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/tasks', taskRoutes);

// connecting to the db

const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_URI}@freecluster.fuuucdh.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL) // connect to mongoDB
        .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))) // if successful, listen for port
        .catch((error) => console.log(error.message)); // else, throw error