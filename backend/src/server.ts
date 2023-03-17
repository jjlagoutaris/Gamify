import app from './app';
import env from "./utilities/validateEnv";
import mongoose from "mongoose";

const dbName = `2DoApp`;
const CONNECTION_URL = `mongodb+srv://${env.MONGO_URI}@freecluster.fuuucdh.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const port = env.PORT || 5000;

mongoose.connect(CONNECTION_URL) // connect to mongoDB
        .then(() => app.listen(port, () => console.log(`Server running on port: ${port}`))) // if successful, listen for port
        .catch((error) => console.log(error.message)); // else, throw error