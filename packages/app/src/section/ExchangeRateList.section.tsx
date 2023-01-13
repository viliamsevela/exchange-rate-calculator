import React from 'react';
import { DateTime } from 'luxon';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import { useFetchExchangeRates } from '../hook/useFetchExchangeRates';
import { dateFormat } from '../util/dateTime';
import Container from '../component/Container.component';
import Table from '../component/Table.component';
import TableHeadRow from '../component/TableHeadColumn.component';
import TableRow, { TableRowLoading } from '../component/TableRow.component';

const StyledInfo = styled.div`
  text-align: center;
  margin: 3rem 0 2rem 0;
`;

export default function ExchangeRateListSection(): JSX.Element {
  const { data: exchangeRates, isLoading } = useFetchExchangeRates();

  return (
    <Container>
      <StyledInfo>
        Currency rates against CZK from:{' '}
        {exchangeRates ? <strong>{dateFormat(exchangeRates.createdAt, DateTime.DATE_FULL)}</strong> : <Skeleton />}
      </StyledInfo>
      <Table>
        <thead>
          <tr>
            <TableHeadRow>Currency code</TableHeadRow>
            <TableHeadRow>Currency name</TableHeadRow>
            <TableHeadRow>Country</TableHeadRow>
            <TableHeadRow>Exchange rate</TableHeadRow>
            <TableHeadRow>Amount</TableHeadRow>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            Array(8)
              .fill(null)
              .map(() => <TableRowLoading tdCount={5} />)
          ) : exchangeRates ? (
            exchangeRates.data.map((item, index) => (
              <TableRow key={index}>
                <td>{item.currencyCode.toUpperCase()}</td>
                <td>{item.currencyName}</td>
                <td>{item.countryName}</td>
                <td>{item.rate}</td>
                <td>{item.amount}</td>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <td colSpan={5}>Loading failed</td>
            </TableRow>
          )}
        </tbody>
      </Table>
    </Container>
  );
}
