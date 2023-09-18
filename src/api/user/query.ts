import { User } from "../../database/user_schema";
import { UserInterface } from "./model/user.model";
import { utils } from "../../common/utils";
export class Query {
  getUser = async (body: any) => {
    try {
      const { itemPerPage, pageNumber, sortOn } = body;
      const result = await User.find(
        {},
        "firstname lastname email contact birthdate username"
      )
        .skip(itemPerPage * pageNumber - itemPerPage)
        .limit(itemPerPage)
        .sort(sortOn);
      return result;
    } catch (error: any) {
      throw error;
    }
  };

  getUserByUsername = async (username: string) => {
    try {
      const result = await User.findOne(
        { username: username },
        "firstname lastname email contact birthdate username"
      );
      return result;
    } catch (error: any) {
      throw error;
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
      throw error;
    }
  };

  deleteUser = async (username: string) => {
    try {
      const result: any = await User.findOneAndDelete({ username: username });
      return result;
    } catch (error: any) {
      throw error;
    }
  };

  isUserAvailable = async () => {
    try {
      const result: any = await User.estimatedDocumentCount();
      return result;
    } catch (error: any) {
      throw error;
    }
  };
}
