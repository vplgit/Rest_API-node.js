import { Request, Response, NextFunction } from "express";
import { utils } from "../../common/utils";
export const authentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await utils.jwtVerify(
      req.headers.authorization?.split(" ")[1]
    );
    next();
  } catch (error) {
    next(error);
  }
};
