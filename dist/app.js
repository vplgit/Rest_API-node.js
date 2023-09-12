"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const error_handler_1 = require("./common/middlewares/error_handler");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
//const io = socketIO(server);
// Middleware
app.use((0, cors_1.default)({ origin: "*" }));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Database connection
// mongoose.connect("mongodb://localhost/your_database_name", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// mongoose.connection.on("connected", () => {
//   console.log("Connected to MongoDB");
// });
app.use("/api", require("./api"));
app.use(error_handler_1.errror_handler);
// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
