import React, { InputHTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { inputCss } from '../../css/input.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  trailingComponent?: ReactNode;
  fluid?: boolean;
}

const StyledWrapper = styled.div<{ fluid?: boolean }>`
  ${({ fluid = true }) =>
    fluid &&
    css`
      width: 100%;
    `}
`;

const StyledInputWrapper = styled.div`
  position: relative;
`;

const StyledTrailingComponent = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding-right: 0.5rem;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  ${inputCss};
  outline: none;
`;

export default function Input({ label, name, trailingComponent, fluid = true, ...props }: Props): JSX.Element {
  return (
    <StyledWrapper fluid={fluid}>
      {label && <label htmlFor={name}>{label}</label>}
      <StyledInputWrapper>
        <StyledInput id={name} name={name} {...props}></StyledInput>
        {trailingComponent && <StyledTrailingComponent>{trailingComponent}</StyledTrailingComponent>}
      </StyledInputWrapper>
    </StyledWrapper>
  );
}
