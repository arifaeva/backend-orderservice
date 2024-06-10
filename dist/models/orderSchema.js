"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    user_id: String,
    total_amount: Number,
    status: String,
    created_at: Date,
    updated_at: Date,
});
exports.Order = (0, mongoose_1.model)("Order", orderSchema);
