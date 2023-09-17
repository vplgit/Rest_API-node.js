import express from "express";
import { Controller } from "./controller";
const router = express.Router();
import { Query } from "./query";
import { verifyToken } from "../../common/middlewares/authentication";
const checkFirst = async (req: any, res: any, next: any) => {
  const result: number = await new Query().isUserAvailable();
  result == 0 ? (req.isUserAvailable = false) : (req.isUserAvailable = true);
  next();
};
router.post("/add", checkFirst, verifyToken, Controller.addUser);
router.use(verifyToken);
router.post("/list", Controller.getUser);
router.get("/get/:username", Controller.getUserByUsername);
router.put("/update/:username", Controller.updateUser);
router.delete("/delete/:username", Controller.deleteUser);
module.exports = router;
