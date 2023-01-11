import { CustomError, SerializedErrorMessage } from '../core/custom-error';

export class CnbApiError extends CustomError {
  statusCode = 503;

  constructor(message = 'CNB API error') {
    super(message);

    Object.setPrototypeOf(this, CnbApiError.prototype);
  }

  serializeErrors(): SerializedErrorMessage[] {
    return [{ message: this.message }];
  }
}
