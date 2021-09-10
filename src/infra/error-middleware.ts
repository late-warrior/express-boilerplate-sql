import { APIError } from './api-error';

/**
 * 404 handler for the app
 * @param req
 * @param res
 * @param next
 */
export function notFoundHandler(req, res, next) {
  const error = new APIError(404, { message: 'Route not found' });
  res.status(error.httpStatusCode);
  res.json(error.toJSON());
}

export function errorHandler(err, req, res, next) {
  const error = APIError.fromError(err);
  res.status(error.httpStatusCode);
  res.json(error.toJSON());
}
