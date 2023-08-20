import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
// import routes from './routes/index';

const router: Express = express();

router.use(morgan('dev'));
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With, Content-Type, Authorization');

    if (req.method === 'Options') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
    }
    next();
    router.get('/', (req, res, next) => {
        res.send("Hello");
    });

    router.use((req, res, next) => {
        const error = new Error('not found');
        return res.status(404).json({
            message: error.message
        });
    });
});

const httpServer = http.createServer(router);
const PORT: any = process.env.PORT || 3000;
httpServer.listen(PORT, () => console.log('listening on port '+ PORT ));