import { Schema, model } from "mongoose";
import { Order } from "./orderSchema";

const orderitemSchema = new Schema({
  order_id: { type: Schema.Types.ObjectId, ref: "Order" },
  product_id: String,
  quantity: Number,
  price: Number,
});

export const Orderitem = model("Orderitem", orderitemSchema);
