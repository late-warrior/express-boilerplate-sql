import bodyParser from 'body-parser';
import compress from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import methodOverride from 'method-override';
import morgan from 'morgan';
import passport from 'passport';
import path from 'path';
import favicon from 'serve-favicon';
import routes from '../../api/routes';
import { getJWTStrategy } from '../auth-middleware';
import { errorHandler, notFoundHandler } from '../error-middleware';
import { CONFIG } from './vars';

/**
 * Express instance
 * @public
 */
const app = express();

app.use(favicon(path.resolve('public', 'favicon.ico')));

// request logging. dev: console | production: file
app.use(morgan(CONFIG.logs));

// parse body params and attach them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// gzip compression
app.use(compress());

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// enable authentication
app.use(passport.initialize());
passport.use('jwt', getJWTStrategy());

// mount api at root
app.use('/', routes);

// catch 404 and forward to error handler
app.use(notFoundHandler);

app.use(errorHandler);

export default app;
