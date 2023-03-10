import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

// connecting to the db

const CONNECTION_URL = `mongodb+srv://jjlagoutaris:lXpSRmqwKDqJg0WC@freecluster.fuuucdh.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL) // connect to mongoDB
        .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))) // if successful, listen for port
        .catch((error) => console.log(error.message)); // else, throw error