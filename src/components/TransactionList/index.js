import React from 'react'
import { Transaction } from '../Transaction'
import { ListDiv } from './styles'

export const TransactionList = ({ transactions }) => {
  return (
        <ListDiv>
          {transactions.map(item => {
            return (
              <Transaction key={item.id} item={item} />
            )
          })}
        </ListDiv>
  )
}
