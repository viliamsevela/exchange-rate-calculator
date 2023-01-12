import 'express-async-errors';
import dotenv from 'dotenv';
import express, { Application } from 'express';
import cors from 'cors';
import { router as routerExchangeRates } from './route/exchangeRates';
import { NotFoundError } from './error/not-found-error';
import { errorHandler } from './core/error-handler';

dotenv.config({ path: `../../.env` });

const app: Application = express();
const port = process.env.API_PORT || 3000;

app.use(cors());
app.use('/exchange-rates', routerExchangeRates);
app.all('*', (req) => {
  console.log('req.baseUrl', req.baseUrl);
  console.log('req.path', req.path);
  console.log('req.hostname', req.hostname);
  console.log('req.url', req.url);
  throw new NotFoundError();
});

app.use(errorHandler);

try {
  app.listen(port, (): void => {
    console.log(`API initialized successfully - running on port ${port}`);
  });
} catch (error) {
  if (error instanceof Error) {
    console.error(`API initialization failed: ${error.message}`);
  } else {
    console.error(error);
  }
}
