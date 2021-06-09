import React from 'react'
import { TransactionDiv, TransactionAmount, TransactionConcept, Edit, Delete, TransactionActions } from './styles'
import TrendingDownTwoToneIcon from '@material-ui/icons/TrendingDownTwoTone'
import TrendingUpTwoToneIcon from '@material-ui/icons/TrendingUpTwoTone'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import { IconButton } from '@material-ui/core'

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
              <h4>{item.concept}</h4>
            </TransactionConcept>
            <TransactionActions>
              <IconButton>
                <Edit/>
              </IconButton>
              <IconButton>
                <Delete />
              </IconButton>
            </TransactionActions>
        </TransactionDiv>
  )
}
