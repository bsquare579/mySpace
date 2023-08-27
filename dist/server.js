"use strict";
// import http from 'http';
// import express, { Express } from 'express';
// import morgan from 'morgan';
// import { Routes } from './routes/index.routes';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const router: Express = express();
// router.use(morgan('dev'));
// router.use(express.urlencoded({ extended: false }));
// router.use(express.json());
// router.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With, Content-Type, Authorization');
//     if (req.method === 'Options') {
//         res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
//     }
//     next();
// });
// // Routes
// router.get('/', Routes);
// router.use((req, res, next) => {
//     const error = new Error('not found');
//     return res.status(404).json({
//         message: error.message
//     });
// });
// const httpServer = http.createServer(router);
// const PORT: any = process.env.PORT || 3000;
// httpServer.listen(PORT, () => console.log('listening on port '+ PORT ));
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 3000;
app_1.default.listen(PORT, () => {
    console.log(`App listening on the port ${PORT}`);
});
