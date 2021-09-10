import h from 'http-status';
import jwt from 'jsonwebtoken';

const { JSONWebTokenError } = jwt;
/**
 * Class to encapsulate all error-handling codes within the application
 */
export class APIError extends Error {
  appStatus: string;

  httpStatus: string;

  httpStatusMessage: string;

  constructor(
    public httpStatusCode = 400,
    { jsonWebTokenError = null, message = null }
  ) {
    super();
    this.name = this.constructor.name;
    // See https://github.com/auth0/node-jsonwebtoken#jsonwebtokenerror for error from JSONWebTokenError
    // If this is an authorization error, we return
    this.message = jsonWebTokenError
      ? `${jsonWebTokenError.name} ${jsonWebTokenError.message}`
      : message;
    this.httpStatus = h[httpStatusCode].toString();
    this.httpStatusMessage = h[`${httpStatusCode}_MESSAGE`].toString();
  }

  /**
   * Provide a serialiazable version of the error
   */
  toJSON() {
    const { message, httpStatus, httpStatusCode, httpStatusMessage } = this;
    return {
      message,
      httpStatus,
      httpStatusCode,
      httpStatusMessage,
    };
  }

  static fromAuthFailure(jwtError: Error, appError: Error): APIError {
    if (
      ['JsonWebTokenError', 'NotBeforeError', 'TokenExpiredError'].includes(
        jwtError.name
      )
    ) {
      return new APIError(400, { jsonWebTokenError: jwtError });
    }
    if (jwtError instanceof Error) {
      return new APIError(400, { message: jwtError.message });
    }
    if (appError instanceof Error) {
      return new APIError(500, { message: appError.message });
    }
    return new APIError(500, { message: 'Error' });
  }

  static fromError(err: any): APIError {
    if (err instanceof APIError) {
      return err;
    }
    if (err instanceof Error) {
      return new APIError(500, { message: err.message });
    }
    // Else err is possibly a string
    return new APIError(500, { message: 'Error' });
  }
}
