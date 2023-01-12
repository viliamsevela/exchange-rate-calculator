import { useQuery, UseQueryResult } from 'react-query';
import { Api } from '../util/api';
import { ExchangeRatesData } from '../interface/IExchangeRate';

export const useFetchExchangeRates = (): UseQueryResult<ExchangeRatesData, Error> => {
  return useQuery<ExchangeRatesData, Error>('getExchangeRates', Api.getExchangeRates);
};
