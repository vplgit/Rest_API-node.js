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
exports.Controller = void 0;
const service_1 = require("./service");
const utils_1 = require("../../common/utils");
const service = new service_1.Service();
exports.Controller = {
    getUser: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = (yield service.getUser());
            res.status(200).send({ message: "success", result: result });
        }
        catch (error) {
            next(error);
        }
    }),
    addUser: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield utils_1.utils.jwtSign(req.body);
            //   const result = await utils.jwtVerify(
            //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJWaXNoYWwiLCJsYXN0bmFtZSI6Ikxhd3RlIiwiZW1haWwiOiJ2cGxAZ21haWwuY29tIiwiY29udGFjdCI6IjcyMTk4ODczODciLCJiaXJ0aGRhdGUiOiIzMC8wOS8xOTk5IiwiaWF0IjoxNjk0NTQ2NDMwLCJleHAiOjE2OTQ1NDY1NTB9.jsNCAZyMCrsx8IuOQbrbphxrTCe0cmyknXBpfOjVI0s"
            //   );
            res.status(200).send({ message: "success", result: result });
        }
        catch (error) {
            next(error);
        }
    }),
    updateUser: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
        }
        catch (error) {
            next(error);
        }
    }),
    deleteUser: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
        }
        catch (error) {
            next(error);
        }
    }),
};
