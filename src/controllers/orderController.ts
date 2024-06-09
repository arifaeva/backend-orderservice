import { Request, Response } from "express";
import { Order } from "../models/orderSchema";

export const orderController = {
  createOrder: async (req: Request, res: Response) => {
    const { user_id, total_amount } = req.body;

    const createOrder = new Order({
      user_id,
      total_amount,
      status: "unpaid",
      created_at: new Date(),
      updated_at: new Date(),
    });

    const savedOrder = await createOrder.save();

    return res
      .status(201)
      .json({ message: "Successfully add a new order!", data: savedOrder });
  },

  getAllOrder: async (req: Request, res: Response) => {
    const allOrderHistory = await Order.find();

    return res.status(200).json({
      message: "Successfully get all order history!",
      data: allOrderHistory,
    });
  },

  getSingleOrder: async (req: Request, res: Response) => {
    const { id } = req.params;

    const order = await Order.findById(id);
    return res.json(order);
  },

  updateOrderStatus: async (req: Request, res: Response) => {
    const { id } = req.params;

    // console.log(id);
    const updateStatus = await Order.findByIdAndUpdate(id, {
      status: "paid",
    });
    return res.json(updateStatus);
  },
};