import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';

import App from './app/app';
import store from './app/store';

// React 18 temp fix
// More details:
// https://github.com/ctrlplusb/easy-peasy/issues/741#issuecomment-1110810689
const StoreProviderOverride = StoreProvider as any;

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <StoreProviderOverride store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProviderOverride>
  </StrictMode>
);
