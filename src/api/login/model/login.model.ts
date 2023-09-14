import Joi from "joi";
export interface LoginInterface {
  username: string;
  password: string;
}

export const loginSchema = Joi.object({
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
