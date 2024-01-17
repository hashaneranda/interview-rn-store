import * as React from 'react';
import { Provider } from 'react-redux';

import { NativeBaseProvider } from 'native-base';
import createStore from './store';

// screens
import Routes from '@/routes/index';

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
