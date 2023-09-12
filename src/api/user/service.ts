import { Query } from "./query";
import { User } from "./model/user.model";
const query = new Query();
export class Service {
  getUser = async () => {
    try {
      const result = await query.getUser();
      if (result != undefined || result != null) {
        return result;
      } else {
        return "no data";
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  addUser = async (): Promise<void> => {
    try {
    } catch (error: any) {
      throw new Error(error);
    }
  };
  updateUser = async () => {
    try {
    } catch (error: any) {
      throw new Error(error);
    }
  };
  deleteUser = async () => {
    try {
    } catch (error: any) {
      throw new Error(error);
    }
  };
}
