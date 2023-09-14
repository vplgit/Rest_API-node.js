"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.specs = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
require("dotenv").config(".env");
const port = process.env.PORT;
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "User's API",
            version: "1.0.0",
            description: "API for CRUD operations",
        },
        servers: [
            {
                url: `http://localhost:${port}`,
            },
        ],
    },
    apis: ["src/api/user/controller.ts"], // Path to the API routes
};
exports.specs = (0, swagger_jsdoc_1.default)(options);
