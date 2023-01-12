// TODO: create shared package with common utils and interfaces

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
