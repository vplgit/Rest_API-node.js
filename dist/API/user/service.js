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
exports.Service = void 0;
const query_1 = require("./query");
const query = new query_1.Query();
class Service {
    constructor() {
        this.getUser = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield query.getUser();
                if (result != undefined || result != null) {
                    return result;
                }
                else {
                    return "no data";
                }
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.addUser = () => __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.updateUser = () => __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.deleteUser = () => __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.Service = Service;
