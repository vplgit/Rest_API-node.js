import { Query } from "./query";
import { UserInterface } from "./model/user.model";
import { messages } from "../../common/messages";
import { statusCodes } from "../../common/status_codes";
import { userSchema, filterSchema } from "./model/user.model";
const query = new Query();
export class Service {
  getUser = async (body: any): Promise<any> => {
    try {
      const { error } = filterSchema.validate(body);

      if (error) {
        return {
          statusCode: statusCodes.badRequest,
          message: error.details[0].message,
          result: null,
        };
      } else {
        const result: any = await query.getUser(body);

        if (result != undefined || result != null) {
          return {
            statusCode: statusCodes.suceess,
            message: messages.success,
            result: result,
          };
        } else if (result.length <= 0) {
          return {
            statusCode: statusCodes.suceess,
            message: messages.noData,
            result: result,
          };
        } else {
          return {
            statusCode: statusCodes.internalServerError,
            error: messages.indexedDBnternalServerError,
            result: null,
          };
        }
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  getUserByUsername = async (username: string): Promise<any> => {
    try {
      const result: any = await query.getUserByUsername(username);
      if (result != undefined) {
        return {
          statusCode: statusCodes.suceess,
          message: messages.success,
          result: result,
        };
      } else if (result == null) {
        return {
          statusCode: statusCodes.suceess,
          message: messages.noData,
          result: null,
        };
      } else {
        return {
          statusCode: statusCodes.internalServerError,
          error: messages.indexedDBnternalServerError,
        };
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  addUser = async (body: UserInterface): Promise<any> => {
    try {
      const { error } = userSchema.validate(body);
      if (error) {
        return {
          statusCode: statusCodes.badRequest,
          message: error.details[0].message,
          result: null,
        };
      } else {
        const result = await query.addUser(body);
        if (result != undefined || result != null) {
          return {
            statusCode: statusCodes.suceess,
            message: messages.success,
            result: result,
          };
        } else {
          return {
            statusCode: statusCodes.internalServerError,
            error: messages.indexedDBnternalServerError,
          };
        }
      }
    } catch (error: any) {
      throw error;
    }
  };

  updateUser = async (username: string, body: any): Promise<any> => {
    try {
      const { error } = userSchema.validate(body);
      if (error) {
        return {
          statusCode: statusCodes.badRequest,
          message: error.details[0].message,
          result: null,
        };
      } else {
        const result: any = await query.updateUser(username, body);
        if (result != undefined || result != null) {
          return {
            statusCode: statusCodes.suceess,
            message: messages.success,
            result: result,
          };
        } else {
          return {
            statusCode: statusCodes.internalServerError,
            error: messages.indexedDBnternalServerError,
          };
        }
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  deleteUser = async (username: string): Promise<any> => {
    try {
      const result: any = await query.deleteUser(username);
      if (result != undefined || result != null) {
        return {
          statusCode: statusCodes.suceess,
          message: messages.success,
          result: result,
        };
      } else {
        return {
          statusCode: statusCodes.internalServerError,
          error: messages.indexedDBnternalServerError,
        };
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };
}
