import { User } from "../../database/user_schema";
import { UserInterface } from "./model/user.model";
import { utils } from "../../common/utils";
export class Query {
  getUser = async (body: any) => {
    try {
      const { perpage, page, sort } = body;
      const result = await User.find()
        .skip(perpage * page - perpage)
        .limit(perpage)
        .sort(sort);
      return result;
      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  getUserByUsername = async (username: string) => {
    try {
      const result = await User.findOne({ username: username });
      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  addUser = async (body: UserInterface) => {
    try {
      const newUser = new User({
        firstname: body.firstname,
        lastname: body.lastname,
        email: body.email,
        contact: body.contact,
        birthDate: body.birthdate,
        username: body.username,
        password: await utils.passwordEncrypt(body.password),
      });
      const result = await newUser.save();
      return result;
    } catch (error: any) {
      throw error;
    }
  };

  updateUser = async (username: string, body: UserInterface) => {
    try {
      if (body.password != undefined) {
        body.password = await utils.passwordEncrypt(body.password);
      }
      const result: any = await User.findOneAndUpdate(
        { username: username },
        body,
        { new: true }
      );
      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  deleteUser = async (username: string) => {
    try {
      const result: any = await User.findOneAndDelete({ username: username });
      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  };
}
