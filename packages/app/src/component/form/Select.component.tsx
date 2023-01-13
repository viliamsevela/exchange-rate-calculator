import React, { SelectHTMLAttributes } from 'react';
import styled from 'styled-components';
import { inputCss } from '../../css/input.css';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
}

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledSelect = styled.select`
  ${inputCss};
  outline: none;
`;

export default function Select({ label, name, ...props }: Props): JSX.Element {
  return (
    <StyledWrapper>
      {label && <label htmlFor={name}>{label}</label>}
      <StyledSelect id={name} name={name} {...props}></StyledSelect>
    </StyledWrapper>
  );
}
