import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { orderRouter } from "./routers/orderRouter";
import { orderItemRouter } from "./routers/orderItemRouter";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL!)
  .then(() => console.log("Mongo Connected"))
  .catch(() => console.error("Mongo connection error!"));

const app = express();
const port = process.env.PORT || 8006;

app.use(express.json());
app.use("/orders", orderRouter);
app.use("/orderitems", orderItemRouter);

// console.log("Hello");

app.get("/", (req, res) => res.json({ message: `Hello from port ${port}` }));

app.listen(port);
