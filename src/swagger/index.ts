import swaggerJsdoc from "swagger-jsdoc";
import {} from "../api/user/controller";
require("dotenv").config(".env");
const port = process.env.PORT;
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User's API",
      version: "1.0.0",
      description: "API for CRUD operations",
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ["src/api/user/controller.ts"], // Path to the API routes
};

export const specs = swaggerJsdoc(options);
