import { Request, Response, Application } from "express";
import { HomeRoutes } from './home.routes';

export class Routes {
    public homeRoutes = new HomeRoutes();

    public routes(app: Application): void {
        app.route("/").get((req: Request, res: Response) => {
            res.status(200).send({
                message: "my Space",
            });
        });

        this.homeRoutes.routes(app);
    }
}