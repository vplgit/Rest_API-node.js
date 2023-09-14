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
exports.Query = void 0;
const utils_1 = require("../../common/utils");
const user_schema_1 = require("../../database/user_schema");
class Query {
    constructor() {
        this.login = (body) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password } = body;
                let user = yield user_schema_1.User.findOne({ username });
                user = Object.assign(Object.assign({}, user.toObject()), { _id: user._id.toString() });
                if (user != null) {
                    let isPasswordValid = yield utils_1.utils.passwordDecrypt(password, user.password);
                    if (isPasswordValid) {
                        const token = yield utils_1.utils.jwtSign(user);
                        return {
                            user: 1,
                            token: token,
                        };
                    }
                    else {
                        return {
                            user: 0,
                        };
                    }
                }
                else {
                    return {
                        user: 0,
                    };
                }
                const result = "";
                return result;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.Query = Query;
