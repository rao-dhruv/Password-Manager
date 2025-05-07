const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

console.log(process.env.MONGO_URI);
const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
// Database Name
const dbName = "PassOP";

// Use connect method to connect to the server
client.connect();
console.log("Connected successfully to server");

// GET all the passwords
app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.find({}).toArray();
  res.json(findResult)
});

// Save a password
app.post("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.insertOne(password);
  res.json({success: true, result: findResult});
});

// Delete a password
app.delete("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.deleteOne(password);
  res.json({success: true, result: findResult});
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
