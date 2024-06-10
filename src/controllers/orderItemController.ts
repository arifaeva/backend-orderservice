import { Request, Response } from "express";
import { Orderitem } from "../models/orderItemSchema";

export const orderItemController = {
  createOrderItem: async (req: Request, res: Response) => {
    const { order_id, product_id, quantity, price } = req.body;

    const createOrderItem = new Orderitem({
      order_id,
      product_id,
      quantity,
      price,
    });

    const savedOrderItem = await createOrderItem.save();
    return res.status(201).json({
      message: "Successfully create a new item order!",
      data: savedOrderItem,
    });
  },

  getAllOrderItem: async (req: Request, res: Response) => {
    const allOrderHistory = await Orderitem.find().populate("order_id");

    return res.status(200).json({
      message: "Successfully get all order items history!",
      data: allOrderHistory,
    });
  },
};
