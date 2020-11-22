import React from 'react';
import Routes from './routers/routes';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
const store = configureStore();

function App() {
  return (
      <Provider store={store}>
        <Routes />
      </Provider>
  );
}

export default App;
