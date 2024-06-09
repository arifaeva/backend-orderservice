import express from "express";
import { orderController } from "../controllers/orderController";

export const orderRouter = express.Router();

orderRouter.post("/", orderController.createOrder);
orderRouter.get("/", orderController.getAllOrder);
orderRouter.get("/:id", orderController.getSingleOrder);
orderRouter.patch("/:id", orderController.updateOrderStatus);
