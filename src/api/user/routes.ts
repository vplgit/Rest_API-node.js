import express from "express";
import { Controller } from "./controller";
const router = express.Router();
import { authentication } from "../../common/middlewares/authentication";

router.get("/get_user", authentication, Controller.getUser);
router.post("/add_user", authentication, Controller.addUser);
router.put("/update_user", authentication, Controller.updateUser);
router.delete("/delete_user", authentication, Controller.deleteUser);
module.exports = router;
