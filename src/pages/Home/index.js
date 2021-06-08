import React from 'react'
import { Header } from '../../components/Header'
import { TransactionList } from '../../components/TransactionList'
import { GlobalDiv } from './styles'
import { Helmet } from 'react-helmet'
import data from '../../dataTest'

const balance = (items) => {
  let total = 0
  for (const i in items) {
    if (items[i].type === 'Egress') {
      total -= items[i].amount
    } else {
      total += items[i].amount
    }
  }

  return total
}

export const Home = () => {
  const total = balance(data)
  return (
        <>
          <Helmet>
            <title>Transaction Tracker - Home</title>
            <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
          </Helmet>
          <GlobalDiv >
            <Header balance={total} />
            <TransactionList transactions={data} />
          </GlobalDiv>

        </>
  )
}
