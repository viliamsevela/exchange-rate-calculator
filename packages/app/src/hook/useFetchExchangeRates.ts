import { useQuery, UseQueryResult } from 'react-query';
import { Api } from '../util/api';
import { ExchangeRatesData } from '../interface/IExchangeRate';

export const useFetchExchangeRates = (): UseQueryResult<ExchangeRatesData, Error> => {
  return useQuery<ExchangeRatesData, Error>('getExchangeRates', Api.getExchangeRates, {
    staleTime: 10 * (60 * 1000), // 10 minutes
    cacheTime: 15 * (60 * 1000), // 10 minutes
  });
};
