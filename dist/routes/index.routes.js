"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const home_routes_1 = require("./home.routes");
class Routes {
    constructor() {
        this.homeRoutes = new home_routes_1.HomeRoutes();
    }
    routes(app) {
        app.route("/").get((req, res) => {
            res.status(200).send({
                message: "my Space",
            });
        });
        this.homeRoutes.routes(app);
    }
}
exports.Routes = Routes;
