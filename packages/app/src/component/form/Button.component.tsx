import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { borderCss } from '../../css/global.css';
import { device } from '../../css/breakpoint';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button`
  display: inline-block;
  width: 100%;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  ${borderCss};
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 5rem;

  &:disabled,
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  &:hover {
    color: #fff;
    background-color: #212529;
    border-color: #212529;
  }

  @media screen and ${device.xs} {
    width: auto;
  }
`;

export default function Button({ ...props }: Props): JSX.Element {
  return <StyledButton {...props} />;
}
