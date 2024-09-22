import express from "express";
import {
  google,
  signin,
  signOut,
  signup,
} from "../controllers/authControllers.js";

const route = express.Router();

route.post("/signup", signup);
route.post("/signin", signin);
route.post("/google", google);
route.post("/signout", signOut);

export default route;
