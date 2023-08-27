"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeRoutes = void 0;
const home_controller_1 = require("../controllers/home.controller");
class HomeRoutes {
    constructor() {
        this.homeController = new home_controller_1.HomeController();
    }
    routes(app) {
        app.route("/home").get(this.homeController.home);
        app.route("/space").get(this.homeController.fetchAllSpace);
    }
}
exports.HomeRoutes = HomeRoutes;
