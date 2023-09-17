import { Response, NextFunction } from "express";
import { utils } from "../../common/utils";
export const verifyToken = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.isUserAvailable != undefined && req.isUserAvailable == false) {
      next();
    } else {
      await utils.jwtVerify(req.headers.authorization?.split(" ")[1]);
      next();
    }
  } catch (error) {
    next(error);
  }
};
