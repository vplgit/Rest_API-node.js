"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const router = express_1.default.Router();
const authentication_1 = require("../../common/middlewares/authentication");
router.use(authentication_1.verifyToken);
router.post("/list", controller_1.Controller.getUser);
router.get("/get/:username", controller_1.Controller.getUserByUsername);
router.post("/add", controller_1.Controller.addUser);
router.put("/update/:username", controller_1.Controller.updateUser);
router.delete("/delete/:username", controller_1.Controller.deleteUser);
module.exports = router;
