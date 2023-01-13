import React from 'react';
import styled from 'styled-components';
import { useFetchExchangeRates } from '../hook/useFetchExchangeRates';
import CurrencyConvertorFormComponent from '../component/CurrencyConvertorForm.component';
import Container from '../component/Container.component';

const StyledH1 = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
`;

export default function CurrencyConvertorSection(): JSX.Element {
  const { data: exchangeRates } = useFetchExchangeRates();

  return (
    <Container>
      <StyledH1>Currency rate calculator</StyledH1>
      <CurrencyConvertorFormComponent exchangeRateList={exchangeRates?.data || []} />
    </Container>
  );
}
