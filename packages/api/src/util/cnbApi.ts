import axios, { AxiosError } from 'axios';
import { DateTime } from 'luxon';
import { CnbApiError } from '../error/cnb-api-error';

export type ExchangeRate = {
  countryName: string;
  currencyName: string;
  currencyCode: string;
  amount: number;
  rate: number;
};

export type ExchangeRatesData = {
  createdAt: Date;
  sequence: number;
  data: ExchangeRate[];
};

// TODO: cache mechanism is very basic, totally should be improved
let exchangeRatesBackup: null | ExchangeRatesData = null;

export class CnbApi {
  private static apiUrl =
    'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt';

  private static parseExchangeRates(input: string): ExchangeRatesData {
    const lineList = input.split('\n');
    const firstLine = lineList.shift();

    if (!firstLine) throw new CnbApiError('CNB exchange rates file is corrupted - first line is missing');

    const parsedDateAndSequence = firstLine.split(' #');

    if (!parsedDateAndSequence.length)
      throw new CnbApiError('CNB exchange rates file is corrupted - invalid date or sequence');

    return {
      createdAt: new Date(parsedDateAndSequence[0]),
      sequence: parseInt(parsedDateAndSequence[1]),
      data: lineList
        .slice(1)
        .filter((line) => line !== '')
        .map(CnbApi.parseExchangeRateLine),
    };
  }

  private static parseExchangeRateLine(input: string, index: number): ExchangeRate {
    const values = input.split('|');
    if (values.length !== 5) {
      throw new CnbApiError(`CNB exchange rates file is corrupted - data line number ${index}`);
    }

    const amount = parseFloat(values[2]);
    const rate = parseFloat(values[4]);

    if (isNaN(amount) || isNaN(rate)) {
      throw new CnbApiError(
        `CNB exchange rates file is corrupted - data line number ${index} - amount or rate is not a number`
      );
    }

    return {
      countryName: values[0],
      currencyName: values[1],
      currencyCode: values[3].toLowerCase(),
      amount: parseFloat(values[2]),
      rate: parseFloat(values[4]),
    };
  }

  public static fetchExchangeRates = async (): Promise<ExchangeRatesData> => {
    try {
      const now = DateTime.now();
      const updateTime = DateTime.now().startOf('day').plus({ hour: 14, minute: 35 });

      if (exchangeRatesBackup && now < updateTime) {
        return exchangeRatesBackup;
      }

      const { data } = await axios.get<string>(CnbApi.apiUrl);
      exchangeRatesBackup = CnbApi.parseExchangeRates(data);
      return exchangeRatesBackup;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new CnbApiError('Could not fetch CNB API');
      }

      throw error;
    }
  };
}
