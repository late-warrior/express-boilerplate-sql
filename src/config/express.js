import bodyParser from 'body-parser';
import compress from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import methodOverride from 'method-override';
import morgan from 'morgan';
import passport from 'passport';
import { converter, handler, notFound } from '../api/middlewares/error';
import routes from '../api/routes/v1';
import { jwt } from './passport';
import { logs } from './vars';

/**
 * Express instance
 * @public
 */
const app = express();

// request logging. dev: console | production: file
app.use(morgan(logs));

// parse body params and attache them to req.body
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
passport.use('jwt', jwt);

// mount api v1 routes
app.use('/v1', routes);

// if error is not an instanceOf APIError, convert it.
app.use(converter);

// catch 404 and forward to error handler
app.use(notFound);

// error handler, send stacktrace only during development
app.use(handler);

export default app;
