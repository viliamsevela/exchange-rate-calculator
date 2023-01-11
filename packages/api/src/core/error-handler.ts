import { NextFunction, Request, Response } from 'express';

import { CustomError } from './custom-error';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): Response => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  console.error('Application error:', err);

  return res.status(400).send({
    errors: [{ message: 'Something went wrong' }],
  });
};
