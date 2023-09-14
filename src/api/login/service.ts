import { Query } from "./query";
import { LoginInterface } from "./model/login.model";
import { messages } from "../../common/messages";
import { statusCodes } from "../../common/status_codes";
import { loginSchema } from "./model/login.model";
const query = new Query();
export class Service {
  login = async (body: LoginInterface): Promise<any> => {
    try {
      const { error } = loginSchema.validate(body);
      if (error) {
        return {
          statusCode: statusCodes.badRequest,
          message: error.details[0].message,
          result: null,
        };
      } else {
        const result: any = await query.login(body);
        if ((result != undefined || result != null) && result.user == 1) {
          return {
            statusCode: statusCodes.suceess,
            message: messages.success,
            result: result,
          };
        } else if (result.user == 0) {
          return {
            statusCode: statusCodes.unauthorized,
            message: messages.Unauthorized,
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
}
