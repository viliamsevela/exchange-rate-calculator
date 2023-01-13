import React, { useMemo, useState } from 'react';
import { ExchangeRate } from '../interface/IExchangeRate';
import Input from './form/Input.component';
import Select from './form/Select.component';
import Button from './form/Button.component';

type Props = {
  exchangeRateList: ExchangeRate[];
};

function convertCurrency(
  amount: number | null,
  exchangeRateMap: Map<string, ExchangeRate>,
  toCurrency: string
): number | null {
  if (!amount) return null;

  const selectedExchangeRate = exchangeRateMap.get(toCurrency);

  if (!selectedExchangeRate) return null;

  return (amount / selectedExchangeRate.rate) * selectedExchangeRate.amount;
}

export default function CurrencyConvertorFormComponent({ exchangeRateList }: Props): JSX.Element {
  const [toCurrency, setToCurrency] = useState<string>('eur');
  const [amount, setAmount] = useState<number | null>(1);
  const [result, setResult] = useState<number | null>(null);

  const exchangeRateMap = useMemo(
    () => new Map<string, ExchangeRate>(exchangeRateList.map((el) => [el.currencyCode, el])),
    [exchangeRateList]
  );

  return (
    <form>
      <Input
        name="from"
        label="From"
        type="number"
        value={amount || ''}
        onChange={({ target }): void => {
          const value = parseFloat(target.value);
          setAmount(isNaN(value) ? null : value);
          setResult(null);
        }}
      />
      <hr />
      <Input name="to" label="To" type="number" readOnly value={result || ''} />
      <Select
        name="to-currency"
        value={toCurrency}
        onChange={(event): void => {
          setToCurrency(event.target.value);
          setResult(convertCurrency(amount, exchangeRateMap, toCurrency));
        }}
      >
        {exchangeRateList.map((item, index) => (
          <option key={index} value={item.currencyCode}>
            {item.currencyCode}
          </option>
        ))}
      </Select>
      <Button
        type="button"
        disabled={!amount || !!result}
        onClick={(): void => {
          setResult(convertCurrency(amount, exchangeRateMap, toCurrency));
        }}
      >
        Convert
      </Button>
    </form>
  );
}
