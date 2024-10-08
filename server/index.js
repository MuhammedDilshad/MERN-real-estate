import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";
import listingRouter from "./routes/listingRouter.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

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

const __dirname = path.resolve();

app.listen(PORT, () => {
  console.log("listening..");
});

app.use("/server/auth", authRouter);
app.use("/server/user", userRouter);
app.use("/server/listing", listingRouter);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
