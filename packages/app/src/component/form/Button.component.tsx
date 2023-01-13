import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button`
  outline: none;
`;

export default function Button({ ...props }: Props): JSX.Element {
  return <StyledButton {...props} />;
}
