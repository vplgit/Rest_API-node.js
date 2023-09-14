"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    firstname: String,
    lastname: String,
    email: { type: String, unique: true },
    contact: { type: String, unique: true },
    birthDate: String,
    username: String,
    password: String,
});
exports.User = mongoose_1.default.model("User", userSchema);
