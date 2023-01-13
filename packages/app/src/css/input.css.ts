import { css } from 'styled-components';
import { borderCss } from './global.css';

export const inputCss = css`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  appearance: none;
  border-radius: 0.25rem;
  ${borderCss};

  &[readonly] {
    background-color: transparent;
  }
`;
