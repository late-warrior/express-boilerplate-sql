import { APIError } from './api-error';

/**
 * Catch 404 and forward to error handler
 * @public
 */
export const notFound = (req, res, next) => {
  res.status(404);
  res.json({ message: 'not found', code: 404 });
};

export function errorHandler(err, req, res, next) {
  const error = APIError.fromError(err);
  res.status(error.httpStatusCode);
  res.json(err.toJSON());
}
