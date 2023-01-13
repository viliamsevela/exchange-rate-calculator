import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { ExchangeRate } from '../interface/IExchangeRate';
import { boxShadow } from '../css/global.css';
import Input from './form/Input.component';
import Select from './form/Select.component';
import Button from './form/Button.component';
import Flex from './Flex.component';
import Box from './Box.component';

type Props = {
  exchangeRateList: ExchangeRate[];
};

const StyledResultWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const StyledResultBox = styled(Box)`
  padding: 1rem 2rem;
  background-color: #fff;
  border-radius: 1rem;
  ${boxShadow};
`;

const StyledResultInputWrapper = styled.div`
  padding: 0 1rem;
`;

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
      <Flex gap={1.5} justify="center">
        <Box>
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
            trailingComponent="CZK"
          />
        </Box>
        <Box>
          <Select
            name="to-currency"
            label="To"
            value={toCurrency}
            onChange={(event): void => {
              setToCurrency(event.target.value);
              setResult(convertCurrency(amount, exchangeRateMap, toCurrency));
            }}
          >
            {exchangeRateList.map(({ currencyCode, currencyName }, index) => (
              <option key={index} value={currencyCode}>
                {currencyCode.toUpperCase()} - {currencyName}
              </option>
            ))}
          </Select>
        </Box>
        <Box self="end">
          <Button
            type="button"
            disabled={!amount || !!result || !exchangeRateList.length}
            onClick={(): void => {
              setResult(convertCurrency(amount, exchangeRateMap, toCurrency));
            }}
          >
            Convert
          </Button>
        </Box>
      </Flex>

      {!!result && (
        <StyledResultWrapper>
          <StyledResultBox align="center">
            <p>{amount} CZK equals</p>
            <StyledResultInputWrapper>
              <Input name="to" type="number" readOnly fluid={false} value={result || ''} />
            </StyledResultInputWrapper>
            <p>{toCurrency.toUpperCase()}</p>
          </StyledResultBox>
        </StyledResultWrapper>
      )}
    </form>
  );
}
