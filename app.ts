import { config } from "dotenv";
config();

import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import mongoose from "mongoose";

import { Routes } from "./routes/index.routes";

class App {
  public express: Application;
  public mongoPath: any = process.env.MONGO_PATH;
  public router: Routes = new Routes();

  constructor() {
    
    this.express = express();    
    this.express.use(morgan("dev"));
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
    this.router.routes(this.express);
    this.initialiseDatabaseConnection();
  }

  private initialiseDatabaseConnection(): void {

    mongoose.connect(`${process.env.MONGO_PATH}`);
    mongoose
      .connect(this.mongoPath)
      .then((res) => {
        console.log(`mongoDB connection: ${this.mongoPath}`);
      })
      .catch((err) => {
        console.log("mongo error in connection:", err.message || err);
      });
  }
}

export default new App().express;
