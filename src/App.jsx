import { GlobalProvider } from "./context/GlobalState";
import Balance from "./components/Balance";
import TransactionsForm from "./components/transactions/TransactionsForm";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 flex text-white h-screen justify-center items-center">
        <div className="container mx-auto w-2/6">
          <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-3">
            <div>
              <h1 className="text-4xl font-bold">Expense Tracker</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionsForm />
            </div>
            <div className="w-full">
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
