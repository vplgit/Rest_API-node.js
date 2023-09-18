import { Service } from "./service";
import { Request, Response, NextFunction } from "express";
const service = new Service();
export const Controller = {
  /**
   * @swagger
   * /api/user/list:
   *   post:
   *     security:
   *       - Authorization: []
   *     tags:
   *       - User
   *     summary: List user
   *     requestBody:
   *       description: User data
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               itemPerPage:
   *                 type: integer
   *               pageNumber:
   *                 type: integer
   *               sortOn:
   *                 properties:
   *                    firstnme:
   *                      type: string
   *             example:
   *               itemPerPage: 10
   *               pageNumber: 1
   *               sortOn: {
   *                firstnme : asc
   *               }
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
  getUser: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const result: any = await service.getUser(req.body);
      res.status(result.statusCode).send(result);
    } catch (error: any) {
      next(error);
    }
  },

  /**
   * @swagger
   * /api/user/get/{username}:
   *   get:
   *     security:
   *       - Authorization: []
   *     tags:
   *       - User
   *     summary: Get user by username
   *     parameters:
   *       - in: path
   *         name: username
   *         required: true
   *         description: username of the user to retrieve
   *         schema:
   *           type: string
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
  getUserByUsername: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const result: any = await service.getUserByUsername(req.params.username);
      res.status(result.statusCode).send(result);
    } catch (error: any) {
      next(error);
    }
  },

  /**
   * @swagger
   * /api/user/add:
   *   post:
   *     security:
   *       - Authorization: []
   *     tags:
   *       - User
   *     summary: Add a new user
   *     requestBody:
   *       description: User data
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               firstname:
   *                 type: string
   *               lastname:
   *                 type: string
   *               email:
   *                 type: string
   *               contact:
   *                 type: string
   *               birthdate:
   *                 type: string
   *               username:
   *                 type: string
   *               password:
   *                 type: string
   *             example:
   *               firstname: john
   *               lastname: doe
   *               email: john@example.com
   *               contact: '9966554488'
   *               birthdate: 30/09/1999
   *               username: john_doe
   *               password: john@example123
   *     responses:
   *       201:
   *         description: Created
   *       200:
   *        description: Suceess
   *       500:
   *         description: Internal Server Error
   *       400:
   *        description: Bad Request
   *       401:
   *         description: Unauthorized
   */
  addUser: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const result: any = await service.addUser(req.body);
      res.status(result.statusCode).send(result);
    } catch (error: any) {
      next(error);
    }
  },

  /**
   * @swagger
   * /api/user/update:
   *   put:
   *     security:
   *       - Authorization: []
   *     tags:
   *       - User
   *     summary: Update a existing user
   *     parameters:
   *       - in: path
   *         name: username
   *         required: true
   *         description: username of the user to update
   *         schema:
   *           type: string
   *     requestBody:
   *       description: User data
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               firstname:
   *                 type: string
   *               lastname:
   *                 type: string
   *               email:
   *                 type: string
   *               contact:
   *                 type: string
   *               birthdate:
   *                 type: string
   *               username:
   *                 type: string
   *               password:
   *                 type: string
   *             example:
   *               firstnme: john
   *               lastname: doe
   *               email: john@example.com
   *               contact: '9966554488'
   *               birthdata: 30/09/1999
   *               username: john_doe
   *               password: john@example123
   *     responses:
   *       201:
   *         description: Created
   *       200:
   *        description: Suceess
   *       500:
   *         description: Internal Server Error
   *       400:
   *        description: Bad Request
   *       401:
   *         description: Unauthorized
   */
  updateUser: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const result: any = await service.updateUser(
        req.params.username,
        req.body
      );
      res.status(result.statusCode).send(result);
    } catch (error: any) {
      next(error);
    }
  },

  /**
   * @swagger
   * /api/user/delete/{username}:
   *   delete:
   *     security:
   *       - Authorization: []
   *     tags:
   *       - User
   *     summary: Delete user by username
   *     parameters:
   *       - in: path
   *         name: username
   *         required: true
   *         description: username of the user to delete
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Successful response
   *       404:
   *         description: User not found
   *       500:
   *         description: Internal Server Error
   *       400:
   *        description: Bad Request
   *       401:
   *         description: Unauthorized
   */
  deleteUser: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const result: any = await service.deleteUser(req.params.username);
      res.status(result.statusCode).send(result);
    } catch (error: any) {
      next(error);
    }
  },
};
