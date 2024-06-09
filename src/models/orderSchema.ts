import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  user_id: String,
  total_amount: Number,
  status: String,
  created_at: Date,
  updated_at: Date,
});

export const Order = model("Order", orderSchema);
