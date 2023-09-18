import Joi from "joi";
import moment from "moment";

//Custome validation for date field for format DD/MM/YYYY
const customDateValidator = (value: any, helpers: any) => {
  const date = moment(value, "DD/MM/YYYY", true); // Parse the date with the specified format

  if (!date.isValid()) {
    return helpers.error("date.invalid"); // Validation failed
  }
  return value; // Validation succeeded, return the original value
};

export interface UserInterface {
  firstname: string;
  lastname: string;
  email: string;
  contact: string;
  birthdate: string;
  username: string;
  password: string;
}

export const userSchema = Joi.object({
  firstname: Joi.string().min(2).max(12).required(),
  lastname: Joi.string().min(2).max(12).required(),
  email: Joi.string().email().required(),
  contact: Joi.string()
    .min(10)
    .messages({
      "string.min": "Contact lenght must be atleast 10 character long",
    })
    .max(16)
    .messages({
      "string.max":
        "Contact lenght must be less than or equal to 16 character long",
    })
    .regex(/^[0-9()+-]+$/)
    .messages({ "string.pattern.base": "Contact allowed only 0-9, + - ( )" })
    .required(),
  birthdate: Joi.string().custom(customDateValidator, "Custom date validation"),
  username: Joi.string().min(2).max(12).required(),
  password: Joi.string()
    .min(8)
    .required()
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
      )
    ),
});
export const userUpdateSchema = Joi.object({
  firstname: Joi.string().min(2).max(12),
  lastname: Joi.string().min(2).max(12),
  email: Joi.string().email(),
  contact: Joi.string()
    .min(10)
    .messages({
      "string.min": "Contact lenght must be atleast 10 character long",
    })
    .max(16)
    .messages({
      "string.max":
        "Contact lenght must be less than or equal to 16 character long",
    })
    .regex(/^[0-9()+-]+$/)
    .messages({ "string.pattern.base": "Contact allowed only 0-9, + - ( )" }),
  birthdate: Joi.string().custom(customDateValidator, "Custom date validation"),
  username: Joi.string().min(2).max(12),
  password: Joi.string()
    .min(8)
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
      )
    ),
});

export const filterSchema = Joi.object({
  itemPerPage: Joi.number().integer().positive().default(10),
  pageNumber: Joi.number().integer().positive().default(1),
  sortOn: Joi.object().pattern(Joi.string(), Joi.string().valid("asc", "desc")),
});
