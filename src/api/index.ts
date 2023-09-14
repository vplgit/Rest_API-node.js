import express from "express";
const router = express.Router();
router.use("/user", require("./user/routes"));
router.use("/auth", require("./login/routes"));
module.exports = router;
