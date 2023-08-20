import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";

import { Routes } from "./routes/index.routes";

class App {
  public express: Application;
  public mongoPath = `${process.env.MONGO_PATH}`;
  public router: Routes = new Routes();

  constructor() {
    
    this.express = express();    
    this.express.use(morgan("dev"));
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
    this.router.routes(this.express);
    // if (process.env.SERVER_ENV === "production") {
    //   this.createAdmin();
    // }
  }

  // private async createAdmin() {
  //   try {
  //     const userCount = await User.countDocuments();
  //     if (userCount === 0) {
  //       const adminUser = await User.create({
  //         email: "admin@myspace.africa",
  //         password: "Admin@myspace",
  //         role: "admin",
  //         firstName: "My",
  //         lastName: "Space",
  //         isActive: true,
  //       });

  //       console.log("admin user created ", adminUser);
  //     }
  //   } catch (error) {
  //     console.log("create admin error");
  //   }
  // }

}

export default new App().express;
