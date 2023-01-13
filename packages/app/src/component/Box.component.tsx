import styled, { css } from 'styled-components';
import { device } from '../css/breakpoint';

const Justify = {
  start: 'start',
  end: 'end',
  center: 'center',
  stretch: 'stretch',
  spaceAround: 'space-around',
  spaceBetween: 'space-between',
  spaceEvenly: 'space-evenly',
} as const;

const Align = {
  start: 'start',
  end: 'end',
  center: 'center',
  baseLine: 'baseline',
  normal: 'normal',
  revert: 'revert',
  stretch: 'stretch',
} as const;

const Direction = {
  row: 'row',
  column: 'column',
} as const;

type Props = {
  align?: (typeof Align)[keyof typeof Align];
  self?: (typeof Align)[keyof typeof Align];
  justify?: (typeof Justify)[keyof typeof Justify];
  direction?: (typeof Direction)[keyof typeof Direction];
  gap?: number;
};

const Box = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ justify = Justify.start }) =>
    css`
      justify-content: ${justify};
    `}

  ${({ align = Align.start }) =>
    css`
      align-items: ${align};
    `}

  ${({ self = Align.start }) =>
    css`
      align-self: ${self};
    `}

  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap}rem;
    `}

  @media screen and ${device.xs} {
    width: auto;

    ${({ direction = Direction.row }) =>
      css`
        flex-direction: ${direction};
      `}
  }
`;

export default Box;
