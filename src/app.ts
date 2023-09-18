import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import { connectDb } from "./database/db_connection";
import { specs } from "./swagger";
connectDb();

import { errror_handler } from "./common/middlewares/error_handler";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Middleware
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Custome namespace for number of communications
const custome_namespace = io.of("/custome_namespace");

// IO Socket Server connection
custome_namespace.on("connection", (socket) => {
  console.log("A user connected");
  // Listen for events from the client
  socket.on("chat message", (message) => {
    console.log("Message from client: " + message);
    // Broadcast the message to all connected clients
    custome_namespace.emit("chat message", message);
  });
  //disconnect with client
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

//request routes
app.use("/api", require("./api"));
// Use Swagger UI middleware to serve API documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use(errror_handler);

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
