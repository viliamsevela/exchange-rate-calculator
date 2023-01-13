import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const StyledInput = styled.input`
  outline: none;
`;

export default function Input({ label, name, ...props }: Props): JSX.Element {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <StyledInput id={name} name={name} {...props}></StyledInput>
    </div>
  );
}
