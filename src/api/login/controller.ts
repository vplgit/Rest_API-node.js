import { Service } from "./service";
import { utils } from "../../common/utils";
import { Request, Response, NextFunction } from "express";
import { LoginInterface } from "./model/login.model";
const service = new Service();
export const Controller = {
  login: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const result: any = await service.login(req.body);
      res.status(result.statusCode).send(result);
    } catch (error: any) {
      next(error);
    }
  },
};
