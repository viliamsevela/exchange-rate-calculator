import React from 'react';
import { DateTime } from 'luxon';
import { useFetchExchangeRates } from '../hook/useFetchExchangeRates';
import { dateFormat } from '../util/dateTime';

export default function ExchangeRateListSection(): JSX.Element {
  const { data: exchangeRates, isLoading } = useFetchExchangeRates();

  if (isLoading) return <p>Loading...</p>;
  if (!exchangeRates) return <p>Loading failed</p>;

  return (
    <>
      <p>
        Currency rates from: <span>{dateFormat(exchangeRates.createdAt, DateTime.DATE_FULL)}</span>
      </p>
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {exchangeRates.data.map((item, index) => (
            <tr key={index}>
              <td>{item.countryName}</td>
              <td>{item.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
