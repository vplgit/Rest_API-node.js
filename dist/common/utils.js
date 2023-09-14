"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv").config();
const bcrypt = __importStar(require("bcryptjs"));
const secretKey = process.env.SERCRET_KEY;
exports.utils = {
    jwtSign: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const option = {
            expiresIn: "30d",
        };
        const token = jsonwebtoken_1.default.sign(payload, secretKey, option);
        return token;
    }),
    jwtVerify: (token) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = jsonwebtoken_1.default.verify(token, secretKey);
            return result;
        }
        catch (error) {
            throw error;
        }
    }),
    passwordEncrypt: (password) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const encryptedPassword = bcrypt.hash(password, 10);
            return encryptedPassword;
        }
        catch (error) {
            throw new error(error);
        }
    }),
    passwordDecrypt: (password, passworHash) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const isPassword = bcrypt.compare(password, passworHash);
            return isPassword;
        }
        catch (error) {
            throw new error(error);
        }
    }),
};
