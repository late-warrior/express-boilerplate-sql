import httpStatus from 'http-status';

const AppErrorStatus = {
  IncorrectRole: 0,
} as const;

/**
 * Class representing an API error.
 */
export class APIError extends Error {
  /**
   * Creates an API error.
   */
  constructor(public message:String, public errorStatus: AppErrorStatus, status=httpStatus.INTERNAL_SERVER_ERROR, stack: String?) {}

  toJson() {
    return {
      message: this.message,
      errorStatus: this.errorStatus,
      status: this.status,
      stack: this.stack
    }
  }
}

const n = new APIError();
console.log(n.toJson());