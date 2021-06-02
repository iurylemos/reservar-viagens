import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Routes from './routes/routes';
import { GlobalStyle } from './styles/global';
import store from './store';


const App: React.FC = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter >
    </Provider>
  );
}


export default App;
