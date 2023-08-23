import { Application } from "express";
import { HomeController } from '../controllers/home.controller';

export class HomeRoutes {
    public homeController = new HomeController();

    public routes(app: Application): void {
        
    app.route("/home").get(this.homeController.home);
    app.route("/space").get(this.homeController.fetchAllSpace);
    
    }
}