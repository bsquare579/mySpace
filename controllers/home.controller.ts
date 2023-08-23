import { Request, Response, NextFunction } from 'express';
import { Space } from "../models/space.model";


export class HomeController {

    public async home(req: Request, res: Response, next: NextFunction) {
        return res.send("Welcome to mySpace Home");
    };
    public async fetchAllSpace(req: Request, res: Response){

        return res.send("fetch All Space");
        
    }
}