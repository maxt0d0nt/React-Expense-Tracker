import React from 'react'
import { useGlobalState } from '../../context/GlobalState'

function TransactionList() {

  const {transactions, deleteTransaction} = useGlobalState()
  return (
    <>{
    transactions.map(transactions => (
      <div key={transactions.id}>
        <p>{transactions.description}</p>
        <span>{transactions.amount}</span>
        <button onClick={() => { deleteTransaction(transactions.id)}}>X</button>
      </div>
    ))
}</>
  )
}

export default TransactionList