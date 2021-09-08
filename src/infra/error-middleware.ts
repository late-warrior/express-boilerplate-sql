import expressValidation from 'express-validation';
import httpStatus from 'http-status';
import { APIError } from './api-error';
import { CONFIG } from './config/vars';

// /**
//  * Error handler. Send stacktrace only during development
//  * @public
//  */
// export const handler = (err, req, res, next) => {
//   const response = {
//     code: err.status,
//     message: err.message || httpStatus[err.status],
//     errors: err.errors,
//     stack: err.stack,
//   };

//   if (CONFIG.env !== 'development') {
//     delete response.stack;
//   }

//   res.status(err.status);
//   res.json(response);
// };

// /**
//  * If error is not an instanceOf APIError, convert it.
//  * @public
//  */
// export const converter = (err, req, res, next) => {
//   let convertedError = err;

//   if (err instanceof expressValidation.ValidationError) {
//     // @ts-ignore
//     convertedError = new APIError({
//       message: 'Validation Error',
//       errors: err.errors,
//       status: err.status,
//       // @ts-ignore
//       stack: err.stack,
//     });
//   } else if (!(err instanceof APIError)) {
//     // @ts-ignore
//     convertedError = new APIError({
//       message: err.message,
//       status: err.status,
//       stack: err.stack,
//     });
//   }

//   return handler(convertedError, req, res, next);
// };

/**
 * Catch 404 and forward to error handler
 * @public
 */
export const notFound = (req, res, next) => {
    res.status(404);
    res.json({message: 'not found', code: 404});
};

export function errorHandler(err, req, res, next) {
    res.status(500);
    res.json({message: 'stuff happens', code: 500});
}
