"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const orderSchema_1 = require("../models/orderSchema");
exports.orderController = {
    createOrder: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { user_id, total_amount } = req.body;
        const createOrder = new orderSchema_1.Order({
            user_id,
            total_amount,
            status: "unpaid",
            created_at: new Date(),
            updated_at: new Date(),
        });
        const savedOrder = yield createOrder.save();
        return res
            .status(201)
            .json({ message: "Successfully add a new order!", data: savedOrder });
    }),
    getAllOrder: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const allOrderHistory = yield orderSchema_1.Order.find();
        return res.status(200).json({
            message: "Successfully get all order history!",
            data: allOrderHistory,
        });
    }),
    getSingleOrder: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const order = yield orderSchema_1.Order.findById(id);
        return res.json(order);
    }),
    updateOrderStatus: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        // console.log(id);
        const updateStatus = yield orderSchema_1.Order.findByIdAndUpdate(id, {
            status: "paid",
        });
        return res.json(updateStatus);
    }),
};
