import React, { SelectHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
}

const StyledSelect = styled.select`
  outline: none;
`;

export default function Select({ label, name, ...props }: Props): JSX.Element {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <StyledSelect id={name} name={name} {...props}></StyledSelect>
    </div>
  );
}
