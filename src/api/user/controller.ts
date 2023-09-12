import { Service } from "./service";
import { utils } from "../../common/utils";
import { Request, Response, NextFunction } from "express";
import { User } from "./model/user.model";
const service = new Service();
export const Controller = {
  getUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result: User = (await service.getUser()) as User;
      res.status(200).send({ message: "success", result: result });
    } catch (error: any) {
      next(error);
    }
  },
  addUser: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const result = await utils.jwtSign(req.body);
    //   const result = await utils.jwtVerify(
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJWaXNoYWwiLCJsYXN0bmFtZSI6Ikxhd3RlIiwiZW1haWwiOiJ2cGxAZ21haWwuY29tIiwiY29udGFjdCI6IjcyMTk4ODczODciLCJiaXJ0aGRhdGUiOiIzMC8wOS8xOTk5IiwiaWF0IjoxNjk0NTQ2NDMwLCJleHAiOjE2OTQ1NDY1NTB9.jsNCAZyMCrsx8IuOQbrbphxrTCe0cmyknXBpfOjVI0s"
    //   );
      res.status(200).send({ message: "success", result: result });
    } catch (error: any) {
      next(error);
    }
  },
  updateUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error: any) {
      next(error);
    }
  },
  deleteUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error: any) {
      next(error);
    }
  },
};
