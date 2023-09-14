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
const messages_1 = require("../../common/messages");
const status_codes_1 = require("../../common/status_codes");
const login_model_1 = require("./model/login.model");
const query = new query_1.Query();
class Service {
    constructor() {
        this.login = (body) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { error } = login_model_1.loginSchema.validate(body);
                if (error) {
                    return {
                        statusCode: status_codes_1.statusCodes.badRequest,
                        message: error.details[0].message,
                        result: null,
                    };
                }
                else {
                    const result = yield query.login(body);
                    if ((result != undefined || result != null) && result.user == 1) {
                        return {
                            statusCode: status_codes_1.statusCodes.suceess,
                            message: messages_1.messages.success,
                            result: result,
                        };
                    }
                    else if (result.user == 0) {
                        return {
                            statusCode: status_codes_1.statusCodes.unauthorized,
                            message: messages_1.messages.Unauthorized,
                            result: result,
                        };
                    }
                    else {
                        return {
                            statusCode: status_codes_1.statusCodes.internalServerError,
                            error: messages_1.messages.indexedDBnternalServerError,
                        };
                    }
                }
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.Service = Service;
