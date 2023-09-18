"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterSchema = exports.userUpdateSchema = exports.userSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const moment_1 = __importDefault(require("moment"));
//Custome validation for date field for format DD/MM/YYYY
const customDateValidator = (value, helpers) => {
    const date = (0, moment_1.default)(value, "DD/MM/YYYY", true); // Parse the date with the specified format
    if (!date.isValid()) {
        return helpers.error("date.invalid"); // Validation failed
    }
    return value; // Validation succeeded, return the original value
};
exports.userSchema = joi_1.default.object({
    firstname: joi_1.default.string().min(2).max(12).required(),
    lastname: joi_1.default.string().min(2).max(12).required(),
    email: joi_1.default.string().email().required(),
    contact: joi_1.default.string()
        .min(10)
        .messages({
        "string.min": "Contact lenght must be atleast 10 character long",
    })
        .max(16)
        .messages({
        "string.max": "Contact lenght must be less than or equal to 16 character long",
    })
        .regex(/^[0-9()+-]+$/)
        .messages({ "string.pattern.base": "Contact allowed only 0-9, + - ( )" })
        .required(),
    birthdate: joi_1.default.string().custom(customDateValidator, "Custom date validation"),
    username: joi_1.default.string().min(2).max(12).required(),
    password: joi_1.default.string()
        .min(8)
        .required()
        .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")),
});
exports.userUpdateSchema = joi_1.default.object({
    firstname: joi_1.default.string().min(2).max(12),
    lastname: joi_1.default.string().min(2).max(12),
    email: joi_1.default.string().email(),
    contact: joi_1.default.string()
        .min(10)
        .messages({
        "string.min": "Contact lenght must be atleast 10 character long",
    })
        .max(16)
        .messages({
        "string.max": "Contact lenght must be less than or equal to 16 character long",
    })
        .regex(/^[0-9()+-]+$/)
        .messages({ "string.pattern.base": "Contact allowed only 0-9, + - ( )" }),
    birthdate: joi_1.default.string().custom(customDateValidator, "Custom date validation"),
    username: joi_1.default.string().min(2).max(12),
    password: joi_1.default.string()
        .min(8)
        .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")),
});
exports.filterSchema = joi_1.default.object({
    itemPerPage: joi_1.default.number().integer().positive().default(10),
    pageNumber: joi_1.default.number().integer().positive().default(1),
    sortOn: joi_1.default.object().pattern(joi_1.default.string(), joi_1.default.string().valid("asc", "desc")),
});
