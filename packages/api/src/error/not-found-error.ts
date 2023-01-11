import { CustomError, SerializedErrorMessage } from '../core/custom-error';

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super('Endpoint not found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors(): SerializedErrorMessage[] {
    return [{ message: 'Endpoint not Found' }];
  }
}
