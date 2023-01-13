import React from 'react';
import { useFetchExchangeRates } from '../hook/useFetchExchangeRates';
import CurrencyConvertorFormComponent from '../component/CurrencyConvertorForm.component';

export default function CurrencyConvertorSection(): JSX.Element {
  const { data: exchangeRates, isLoading } = useFetchExchangeRates();

  if (isLoading) return <p>Loading...</p>;
  if (!exchangeRates) return <p>Loading failed</p>;

  return (
    <div>
      <p>calculator:</p>
      <CurrencyConvertorFormComponent exchangeRateList={exchangeRates.data} />
    </div>
  );
}
