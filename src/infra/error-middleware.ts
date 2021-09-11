import express from 'express';
import { APIError } from './api-error';

/**
 * 404 handler for the app
 * @param _req
 * @param res
 * @param _next
 */
export function notFoundHandler(
  _req: express.Request,
  res: express.Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: express.NextFunction
): void {
  const error = new APIError(404, { message: 'Route not found' });
  res.status(error.httpStatusCode);
  res.json(error.toJSON());
}

export function errorHandler(
  err: Error,
  _req: express.Request,
  res: express.Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: express.NextFunction
): void {
  const error = APIError.fromError(err);
  res.status(error.httpStatusCode);
  res.json(error.toJSON());
}
