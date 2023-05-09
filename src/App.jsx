
import {GlobalProvider} from './context/GlobalState'
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionsForm from './components/transactions/TransactionsForm';
import TransactionList from './components/transactions/TransactionList';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionsForm />
      <TransactionList />
      <h1>Hello world</h1>
    </GlobalProvider>
  )
}

export default App