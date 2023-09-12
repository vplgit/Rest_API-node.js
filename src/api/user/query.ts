export class Query {
  getUser = async () => {
    try {
      return {
        firstname: "Vishal",
        lastname: "Lawte",
        email: "vpl@gmail.com",
        contact: "7219887387",
        birthdate: "30/09/1999",
      };
    } catch (error: any) {
      throw new Error(error);
    }
  };

  addUser = async () => {
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
