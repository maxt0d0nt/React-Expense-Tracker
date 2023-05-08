import React from 'react';
import {GlobalProvider} from './context/GlobalState'
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionsForm from './components/TransactionsForm';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionsForm />
      <h1>Hello world</h1>
    </GlobalProvider>
  )
}

export default App