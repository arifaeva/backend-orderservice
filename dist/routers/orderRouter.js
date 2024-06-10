"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = __importDefault(require("express"));
const orderController_1 = require("../controllers/orderController");
exports.orderRouter = express_1.default.Router();
exports.orderRouter.post("/", orderController_1.orderController.createOrder);
exports.orderRouter.get("/", orderController_1.orderController.getAllOrder);
exports.orderRouter.get("/:id", orderController_1.orderController.getSingleOrder);
exports.orderRouter.patch("/:id", orderController_1.orderController.updateOrderStatus);
