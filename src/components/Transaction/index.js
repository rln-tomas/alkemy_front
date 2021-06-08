import React from 'react'
import { TransactionDiv, TransactionAmount, TransactionConcept } from './styles'
import TrendingDownTwoToneIcon from '@material-ui/icons/TrendingDownTwoTone'
import TrendingUpTwoToneIcon from '@material-ui/icons/TrendingUpTwoTone'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'

export const Transaction = ({ item }) => {
  const icon = item.type === 'Egress' ? <TrendingDownTwoToneIcon color='secondary' />
    : <TrendingUpTwoToneIcon style={{ color: 'green' }} />
  return (
        <TransactionDiv>
            <TransactionAmount>
              {icon}
              <h4>
                {item.amount}
              </h4>
              <AttachMoneyIcon fontSize="small" />
            </TransactionAmount>

            <TransactionConcept>
              {item.concept}
            </TransactionConcept>
        </TransactionDiv>
  )
}
