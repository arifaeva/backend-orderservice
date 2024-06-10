"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const orderRouter_1 = require("./routers/orderRouter");
const orderItemRouter_1 = require("./routers/orderItemRouter");
dotenv_1.default.config();
mongoose_1.default
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Mongo Connected"))
    .catch(() => console.error("Mongo connection error!"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8006;
app.use(express_1.default.json());
app.use("/orders", orderRouter_1.orderRouter);
app.use("/orderitems", orderItemRouter_1.orderItemRouter);
// console.log("Hello");
app.get("/", (req, res) => res.json({ message: `Hello from port ${port}` }));
app.listen(port);
