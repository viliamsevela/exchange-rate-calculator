import styled, { css } from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import React from 'react';

const TableRow = styled.tr<{ allowHover?: boolean }>`
  text-align: left;
  padding: 0.25rem;

  ${({ allowHover = true }) =>
    allowHover &&
    css`
      &:hover {
        background-color: #efefef;
      }
    `}
`;

export default TableRow;

type Props = {
  tdCount?: number;
  colSpan?: number;
};

export function TableRowLoading({ tdCount = 1, colSpan }: Props): JSX.Element {
  return (
    <TableRow allowHover={false}>
      {Array(tdCount)
        .fill(null)
        .map((_, index) => (
          <td key={index} colSpan={colSpan}>
            <Skeleton />
          </td>
        ))}
    </TableRow>
  );
}
