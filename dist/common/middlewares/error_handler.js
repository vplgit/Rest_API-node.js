"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errror_handler = void 0;
function errror_handler(err, req, res, next) {
    if (err && err.code == 11000) {
        res.status(err.statusCode || 409).send({
            error: `Duplicate Entry:[ ${Object.keys(err.keyValue)} : ${Object.values(err.keyValue)[0]} ]`,
        });
    }
    else {
        res
            .status(err.statusCode || 500)
            .send({ error: err.message || "Internal Server Error" });
    }
}
exports.errror_handler = errror_handler;
