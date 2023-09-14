import { LoginInterface } from "./model/login.model";
import { utils } from "../../common/utils";
import { User } from "../../database/user_schema";
export class Query {
  login = async (body: LoginInterface) => {
    try {
      const { username, password } = body;
      let user: any = await User.findOne({ username });
      user = {
        ...user.toObject(),
        _id: user._id.toString(),
      };
      if (user != null) {
        let isPasswordValid: boolean = await utils.passwordDecrypt(
          password,
          user.password
        );
        if (isPasswordValid) {
          const token = await utils.jwtSign(user);

          return {
            user: 1,
            token: token,
          };
        } else {
          return {
            user: 0,
          };
        }
      } else {
        return {
          user: 0,
        };
      }
      const result = "";
      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  };
}
