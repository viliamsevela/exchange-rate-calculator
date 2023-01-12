import { ExchangeRatesData } from '../interface/IExchangeRate';
import { axiosInstance } from './axios';

export class Api {
  public static getExchangeRates = async (): Promise<ExchangeRatesData> => {
    const { data } = await axiosInstance.get<ExchangeRatesData>('/exchange-rates');
    return data;
  };
}
