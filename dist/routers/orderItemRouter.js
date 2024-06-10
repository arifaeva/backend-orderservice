"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderItemRouter = void 0;
const express_1 = __importDefault(require("express"));
const orderItemController_1 = require("../controllers/orderItemController");
exports.orderItemRouter = express_1.default.Router();
exports.orderItemRouter.post("/", orderItemController_1.orderItemController.createOrderItem);
exports.orderItemRouter.get("/", orderItemController_1.orderItemController.getAllOrderItem);
