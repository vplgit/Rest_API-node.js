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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const router = express_1.default.Router();
const query_1 = require("./query");
const authentication_1 = require("../../common/middlewares/authentication");
const checkFirst = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield new query_1.Query().isUserAvailable();
    result == 0 ? (req.isUserAvailable = false) : (req.isUserAvailable = true);
    next();
});
router.post("/add", checkFirst, authentication_1.verifyToken, controller_1.Controller.addUser);
router.use(authentication_1.verifyToken);
router.post("/list", controller_1.Controller.getUser);
router.get("/get/:username", controller_1.Controller.getUserByUsername);
router.put("/update/:username", controller_1.Controller.updateUser);
router.delete("/delete/:username", controller_1.Controller.deleteUser);
module.exports = router;
