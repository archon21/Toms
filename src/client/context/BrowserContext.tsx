import { createContext } from 'react';

interface Values {
  browserWidth: number;
}

const BrowserContext: React.Context<Values> = createContext({
  browserWidth: 0,
});

export default BrowserContext;
