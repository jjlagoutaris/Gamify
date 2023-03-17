import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_URI}@freecluster.fuuucdh.mongodb.net/?retryWrites=true&w=majority`;
const port = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL) // connect to mongoDB
        .then(() => app.listen(port, () => console.log(`Server running on port: ${port}`))) // if successful, listen for port
        .catch((error) => console.log(error.message)); // else, throw error


