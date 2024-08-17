import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MNDB = process.env.MONGODB;
const PORT = process.env.PORT;

mongoose
  .connect(MNDB)
  .then(() => {
    console.log("Db connected");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.listen(PORT, () => {
  console.log("listening..");
});
