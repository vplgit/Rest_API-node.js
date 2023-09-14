import express from "express";
import { Controller } from "./controller";
const router = express.Router();

router.post("/login", Controller.login);
module.exports = router;
