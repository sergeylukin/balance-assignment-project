import { useStoreRehydrated } from 'easy-peasy';
import { Routes, Route } from 'react-router-dom';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

import { Home } from './home/home';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

const colors = {
  brand: {
    500: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

const ui = (child: ReactJSXElement) => (
  <ChakraProvider theme={theme}>{child}</ChakraProvider>
);

export function App() {
  const isRehydrated = useStoreRehydrated();
  return isRehydrated ? (
    <Routes>
      <Route path="/" element={ui(<Home />)} />
    </Routes>
  ) : (
    <div>Loading...</div>
  );
}

export default App;
