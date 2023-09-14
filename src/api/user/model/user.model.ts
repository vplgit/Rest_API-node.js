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
    .pattern(/^[0-9]{9}$/)
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

export const filterSchema = Joi.object({
  perpage: Joi.number().integer().positive().default(10),
  page: Joi.number().integer().positive().default(1),
  sort: Joi.object().pattern(Joi.string(), Joi.string().valid("asc", "desc")),
});
