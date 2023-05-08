import React from 'react'
import { useGlobalState } from '../context/GlobalState'

function Balance() {

const data = useGlobalState()
  return (
    <>
    <div>Balance</div>
    <div>{JSON.stringify(data)}</div>
    </>
  )
}

export default Balance