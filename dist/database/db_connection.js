"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv").config(".env");
const mongoDbUrl = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/User_mgmt";
const connectDb = () => {
    try {
        mongoose_1.default.connect(mongoDbUrl);
        const db = mongoose_1.default.connection;
        db.on("connected", () => {
            console.log("Connected to MongoDB");
        });
        db.on("error", (err) => {
            console.log("MongoDB connection error:", err);
        });
        db.on("disconnected", () => {
            console.log("MongoDB disconnected");
        });
    }
    catch (error) {
        console.log("Error :", error);
    }
};
exports.connectDb = connectDb;
