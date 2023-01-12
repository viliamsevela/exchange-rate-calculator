import React from 'react';
import { useFetchExchangeRates } from '../hook/useFetchExchangeRates';

export default function ExchangeRateListSection(): JSX.Element {
  const { data: exchangeRates, isLoading } = useFetchExchangeRates();

  if (isLoading) return <p>Loading...</p>;
  if (!exchangeRates) return <p>Loading failed</p>;

  return (
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
  );
}
