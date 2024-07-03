import cors from "cors";
import dotenv from "dotenv";
import pkg from "./data.js";
import express from "express";

//import "./db.js";
import connectDB from "./db2.js";

const app = express();
const data = pkg;
const port = 8000;

dotenv.config();

connectDB();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/pokemon", (req, res) => {
  res.json(data);
});

app.get("/pokemon/playerselect", (req, res) => {
  console.log(data);
  res.json(data);
});

app.get("/pokemon/:id", (req, res) => {
  const singlePokemon = req.params;
  //console.log(singlePokemon);
  const pk1 = data.find((p) => p.id == singlePokemon.id);
  // console.log(pk1);
  res.send(pk1);
});

app.get("/pokemon/:id/:info", (req, res) => {
  const parameters = req.params;
  console.log(parameters);

  const id2 = parameters.id;
  const info2 = parameters.info;

  const pk1 = data.find((p) => p.id == id2);

  console.log(pk1);
  const result = pk1[info2];

  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
