import jwt from "jsonwebtoken";
require("dotenv").config();
import * as bcrypt from "bcryptjs";
const secretKey: any = process.env.SERCRET_KEY;
export const utils = {
  jwtSign: async (payload: any) => {
    const option: any = {
      expiresIn: "30d",
    };
    const token = jwt.sign(payload, secretKey, option);
    return token;
  },

  jwtVerify: async (token: any) => {
    try {
      const result = jwt.verify(token, secretKey);
      return result;
    } catch (error: any) {
      throw error;
    }
  },

  passwordEncrypt: async (password: string) => {
    try {
      const encryptedPassword = bcrypt.hash(password, 10);
      return encryptedPassword;
    } catch (error: any) {
      throw new error(error);
    }
  },

  passwordDecrypt: async (password: string, passworHash: string) => {
    try {
      const isPassword = bcrypt.compare(password, passworHash);
      return isPassword;
    } catch (error: any) {
      throw new error(error);
    }
  },
};
