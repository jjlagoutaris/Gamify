import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';

const app = express();

app.use(json());
app.use(cors());

connect("mongodb://127.0.0.1:27017/mern-todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to DB")).catch(console.error);

app.listen(3001, () => console.log("Server started on port 3001"));