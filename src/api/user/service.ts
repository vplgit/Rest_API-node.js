import { Query } from "./query";
import { UserInterface } from "./model/user.model";
import { messages } from "../../common/messages";
import { statusCodes } from "../../common/status_codes";
import { userSchema, filterSchema, userUpdateSchema } from "./model/user.model";
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

        if ((result != undefined || null) && result.length != 0) {
          return {
            statusCode: statusCodes.suceess,
            message: messages.success,
            result: result,
          };
        } else if (result == null || result.length == 0) {
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
      throw error;
    }
  };

  getUserByUsername = async (username: string): Promise<any> => {
    try {
      const result: any = await query.getUserByUsername(username);
      if (result != undefined || null) {
        return {
          statusCode: statusCodes.suceess,
          message: messages.success,
          result: result,
        };
      } else if (result == null) {
        return {
          statusCode: statusCodes.badRequest,
          message: messages.userNotFound,
          result: null,
        };
      } else {
        return {
          statusCode: statusCodes.internalServerError,
          error: messages.indexedDBnternalServerError,
        };
      }
    } catch (error: any) {
      throw error;
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
        if (result != undefined || null) {
          return {
            statusCode: statusCodes.suceess,
            message: messages.dataSaved,
            result: { id: result._id },
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
      const { error } = userUpdateSchema.validate(body);
      if (error) {
        return {
          statusCode: statusCodes.badRequest,
          message: error.details[0].message,
          result: null,
        };
      } else {
        const result: any = await query.updateUser(username, body);
        if (result != undefined || null) {
          return {
            statusCode: statusCodes.suceess,
            message: messages.dataUpdated,
            result: { id: result._id },
          };
        } else if (result == null) {
          return {
            statusCode: statusCodes.badRequest,
            error: messages.userNotFound,
          };
        }
        {
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

  deleteUser = async (username: string): Promise<any> => {
    try {
      const result: any = await query.deleteUser(username);
      if (result != undefined || result != null) {
        return {
          statusCode: statusCodes.suceess,
          message: messages.dataDeleted,
        };
      } else if (result == null) {
        return {
          statusCode: statusCodes.badRequest,
          message: messages.nothingToDelete,
        };
      }
      {
        return {
          statusCode: statusCodes.internalServerError,
          error: messages.indexedDBnternalServerError,
        };
      }
    } catch (error: any) {
      throw error;
    }
  };
}
