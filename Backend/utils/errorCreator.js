class ErrorHandler extends Error {
  constructor(Message, statusCode) {
    super(Message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;
