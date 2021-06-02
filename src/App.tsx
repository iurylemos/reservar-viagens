import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes/routes';
import { GlobalStyle } from './styles/global';


const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter >
  );
}


export default App;
