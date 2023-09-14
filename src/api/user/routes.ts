import express from "express";
import { Controller } from "./controller";
const router = express.Router();
import { verifyToken } from "../../common/middlewares/authentication";

router.use(verifyToken);
router.post("/list", Controller.getUser);
router.get("/get/:username", Controller.getUserByUsername);
router.post("/add", Controller.addUser);
router.put("/update/:username", Controller.updateUser);
router.delete("/delete/:username", Controller.deleteUser);
module.exports = router;
