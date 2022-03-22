import express, { Application } from 'express';
import morgan from 'morgan';
const swaggerJsDoc = require ('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express') ;


// Routes
import indexRoutes from './routes/index.routes';

import router from './routes/identity_types.routes';

export class App {

    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    middlewares() {
        this.app.use(morgan('dev'));
       
        this.app.use(express.json());
    }

    routes() {
        this.app.use(indexRoutes);
        this.app.use('/identity_types', router);
    }

    async listen() {
        await this.app.listen( this.app.get('port'));
        console.log( `server started at http://localhost:${ this.app.get('port') }` );
    }
    
}