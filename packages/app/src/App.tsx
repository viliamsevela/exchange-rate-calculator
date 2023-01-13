import { createGlobalStyle } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import ExchangeRateListSection from './section/ExchangeRateList.section';
import CurrencyConvertorSection from './section/CurrencyConvertor.section';
import 'react-loading-skeleton/dist/skeleton.css';

const queryClient = new QueryClient();
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

  * {box-sizing: border-box;}
  
  body {
    margin: 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
	  -webkit-appearance: none;
	  margin: 0;
  }
  input[type=number] {
	  -moz-appearance: textfield;
  }
  
  #root {
    width: 100%
  }
`;

export default function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <CurrencyConvertorSection />
      <ExchangeRateListSection />
    </QueryClientProvider>
  );
}
