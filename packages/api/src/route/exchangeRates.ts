import { Router } from 'express';
import { CnbApi } from '../util/cnbApi';

export const router = Router();

router.get('/', async (req, res) => {
  res.send(await CnbApi.fetchExchangeRates());
});
