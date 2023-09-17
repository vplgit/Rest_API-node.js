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
const user_schema_1 = require("../../database/user_schema");
const utils_1 = require("../../common/utils");
class Query {
    constructor() {
        this.getUser = (body) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { itemPerPage, pageNumber, sortOn } = body;
                const result = yield user_schema_1.User.find()
                    .skip(itemPerPage * pageNumber - itemPerPage)
                    .limit(itemPerPage)
                    .sort(sortOn);
                return result;
            }
            catch (error) {
                throw error;
            }
        });
        this.getUserByUsername = (username) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield user_schema_1.User.findOne({ username: username });
                return result;
            }
            catch (error) {
                throw error;
            }
        });
        this.addUser = (body) => __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = new user_schema_1.User({
                    firstname: body.firstname,
                    lastname: body.lastname,
                    email: body.email,
                    contact: body.contact,
                    birthDate: body.birthdate,
                    username: body.username,
                    password: yield utils_1.utils.passwordEncrypt(body.password),
                });
                const result = yield newUser.save();
                return result;
            }
            catch (error) {
                throw error;
            }
        });
        this.updateUser = (username, body) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (body.password != undefined) {
                    body.password = yield utils_1.utils.passwordEncrypt(body.password);
                }
                const result = yield user_schema_1.User.findOneAndUpdate({ username: username }, body, { new: true });
                return result;
            }
            catch (error) {
                throw error;
            }
        });
        this.deleteUser = (username) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield user_schema_1.User.findOneAndDelete({ username: username });
                return result;
            }
            catch (error) {
                throw error;
            }
        });
        this.isUserAvailable = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield user_schema_1.User.estimatedDocumentCount();
                return result;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.Query = Query;
