import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import http from "http";
import socketIO from "socket.io";
import { createServer } from "http";

import { errror_handler } from "./common/middlewares/error_handler";

const app = express();
const server = http.createServer(app);
//const io = socketIO(server);

// Middleware
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Database connection
// mongoose.connect("mongodb://localhost/your_database_name", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.on("connected", () => {
//   console.log("Connected to MongoDB");
// });

app.use("/api", require("./api"));
app.use(errror_handler);

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
