import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap');
  
  :root {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    
    color: #333;
    background-color: #f9f9f9;
    
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
  }
`;

export default function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <p>TODO</p>
    </>
  );
}
