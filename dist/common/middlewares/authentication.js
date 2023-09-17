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
exports.verifyToken = void 0;
const utils_1 = require("../../common/utils");
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        if (req.isUserAvailable != undefined && req.isUserAvailable == false) {
            next();
        }
        else {
            yield utils_1.utils.jwtVerify((_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1]);
            next();
        }
    }
    catch (error) {
        next(error);
    }
});
exports.verifyToken = verifyToken;
