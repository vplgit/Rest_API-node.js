"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const db_connection_1 = require("./database/db_connection");
const swagger_1 = require("./swagger");
(0, db_connection_1.connectDb)();
const error_handler_1 = require("./common/middlewares/error_handler");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server);
// Middleware
app.use((0, cors_1.default)({ origin: "*" }));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
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
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.specs, {
    explorer: true,
}));
app.use(error_handler_1.errror_handler);
// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
