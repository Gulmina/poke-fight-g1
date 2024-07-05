//for database connection

import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGO_URI;
let client;
let clientPromise;

if (!process.env.MONGO_URI) {
  throw new Error("Please add your mongo URI to env local file");
}
if (process.env.NODE_ENV === "developement") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);

  clientPromise = client.connect();
  console.log("db is connected");
}

export default clientPromise;
