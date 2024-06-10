"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orderitem = void 0;
const mongoose_1 = require("mongoose");
const orderitemSchema = new mongoose_1.Schema({
    order_id: { type: mongoose_1.Schema.Types.ObjectId, ref: "Order" },
    product_id: String,
    quantity: Number,
    price: Number,
});
exports.Orderitem = (0, mongoose_1.model)("Orderitem", orderitemSchema);
