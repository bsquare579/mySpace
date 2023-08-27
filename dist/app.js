"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const index_routes_1 = require("./routes/index.routes");
class App {
    constructor() {
        this.mongoPath = process.env.MONGO_PATH;
        this.router = new index_routes_1.Routes();
        this.express = (0, express_1.default)();
        this.express.use((0, morgan_1.default)("dev"));
        this.express.use(express_1.default.json());
        this.express.use(express_1.default.urlencoded({ extended: false }));
        this.router.routes(this.express);
        this.initialiseDatabaseConnection();
    }
    initialiseDatabaseConnection() {
        mongoose_1.default.connect(`${process.env.MONGO_PATH}`);
        mongoose_1.default
            .connect(this.mongoPath)
            .then((res) => {
            console.log(`mongoDB connection: ${this.mongoPath}`);
        })
            .catch((err) => {
            console.log("mongo error in connection:", err.message || err);
        });
    }
}
exports.default = new App().express;
