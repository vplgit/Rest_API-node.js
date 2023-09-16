import { Service } from "./service";
import { utils } from "../../common/utils";
import { Request, Response, NextFunction } from "express";
import { LoginInterface } from "./model/login.model";
const service = new Service();
export const Controller = {
  /**
   * @swagger
   * /api/auth/login:
   *   post:
   *     tags:
   *       - Login
   *     summary: User Login
   *     requestBody:
   *       description: User credentials
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               username:
   *                 type: string
   *               pssword:
   *                 type: string
   *             example:
   *               username: user
   *               password: User@123
   *     responses:
   *       200:
   *        description: Suceess
   *       500:
   *         description: Internal Server Error
   *       400:
   *        description: Bad Request
   *       401:
   *         description: Unauthorized
   */
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
