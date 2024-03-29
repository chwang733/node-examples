import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as cors from 'cors';

//import routers
import PostRouter from './controllers/PostController';
import UserRouter from './controllers/UserController';
import User from './models/User';

//Server class
class Server {
    public app: express.Application;
    
    constructor(){
        this.app= express();
        this.config();
        this.routes(); 
    }

    public config(){
        const MONGO_URI='mongodb://localhost/tes'
        mongoose.connect(process.env.MONGODB_URI || MONGO_URI );
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));    
        this.app.use(helmet());
        this.app.use(logger('dev'));
        this.app.use(cors());
        // cors options 

    }

    public routes(): void{
        let router: express.Router;
        router=express.Router();
        
        this.app.use('/', router);
        this.app.use('/api/v1/posts',PostRouter);
        this.app.use('/api/v1/users',UserRouter)

    }

}

export default new Server().app;