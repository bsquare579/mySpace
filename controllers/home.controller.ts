import { Request, Response, NextFunction } from 'express';

export class HomeController {

    public async home(req: Request, res: Response, next: NextFunction) {
        return res.send("Welcome to mySpace");
    };
}