import express from "express";
import { orderItemController } from "../controllers/orderItemController";

export const orderItemRouter = express.Router();

orderItemRouter.post("/", orderItemController.createOrderItem);
orderItemRouter.get("/", orderItemController.getAllOrderItem);
