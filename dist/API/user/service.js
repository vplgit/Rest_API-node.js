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
const user_model_1 = require("./model/user.model");
const query = new query_1.Query();
class Service {
    constructor() {
        this.getUser = (body) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { error } = user_model_1.filterSchema.validate(body);
                if (error) {
                    return {
                        statusCode: status_codes_1.statusCodes.badRequest,
                        message: error.details[0].message,
                        result: null,
                    };
                }
                else {
                    const result = yield query.getUser(body);
                    if (result != undefined || result != null) {
                        return {
                            statusCode: status_codes_1.statusCodes.suceess,
                            message: messages_1.messages.success,
                            result: result,
                        };
                    }
                    else if (result.length <= 0) {
                        return {
                            statusCode: status_codes_1.statusCodes.suceess,
                            message: messages_1.messages.noData,
                            result: result,
                        };
                    }
                    else {
                        return {
                            statusCode: status_codes_1.statusCodes.internalServerError,
                            error: messages_1.messages.indexedDBnternalServerError,
                            result: null,
                        };
                    }
                }
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getUserByUsername = (username) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield query.getUserByUsername(username);
                if (result != undefined) {
                    return {
                        statusCode: status_codes_1.statusCodes.suceess,
                        message: messages_1.messages.success,
                        result: result,
                    };
                }
                else if (result == null) {
                    return {
                        statusCode: status_codes_1.statusCodes.suceess,
                        message: messages_1.messages.noData,
                        result: null,
                    };
                }
                else {
                    return {
                        statusCode: status_codes_1.statusCodes.internalServerError,
                        error: messages_1.messages.indexedDBnternalServerError,
                    };
                }
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.addUser = (body) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { error } = user_model_1.userSchema.validate(body);
                if (error) {
                    return {
                        statusCode: status_codes_1.statusCodes.badRequest,
                        message: error.details[0].message,
                        result: null,
                    };
                }
                else {
                    const result = yield query.addUser(body);
                    if (result != undefined || result != null) {
                        return {
                            statusCode: status_codes_1.statusCodes.suceess,
                            message: messages_1.messages.success,
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
                throw error;
            }
        });
        this.updateUser = (username, body) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { error } = user_model_1.userSchema.validate(body);
                if (error) {
                    return {
                        statusCode: status_codes_1.statusCodes.badRequest,
                        message: error.details[0].message,
                        result: null,
                    };
                }
                else {
                    const result = yield query.updateUser(username, body);
                    if (result != undefined || result != null) {
                        return {
                            statusCode: status_codes_1.statusCodes.suceess,
                            message: messages_1.messages.success,
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
        this.deleteUser = (username) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield query.deleteUser(username);
                if (result != undefined || result != null) {
                    return {
                        statusCode: status_codes_1.statusCodes.suceess,
                        message: messages_1.messages.success,
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
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.Service = Service;
