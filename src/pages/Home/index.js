import React, { useState, useEffect } from 'react'
import { Header } from '../../components/Header'
import { TransactionList } from '../../components/TransactionList'
import { GlobalDiv } from './styles'
import { Helmet } from 'react-helmet'
import { ModalForm } from '../../components/ModalForm'
import axios from 'axios'

const balance = (items) => {
  let totalT = 0
  for (const i in items) {
    if (items[i].type === 'Expense') {
      totalT -= items[i].amount
    } else {
      totalT += items[i].amount
    }
  }

  return totalT
}

export const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const [transactions, setTrasactions] = useState([])
  const [edit, setEdit] = useState(false)
  const [transac, setTransaction] = useState({
    concept: '',
    amount: 0,
    date: undefined,
    type: ''
  })
  const [total, setTotal] = useState(0)
  const [loadingTransaction, setLoading] = useState(false)

  /*
  useEffect(() => {
    axios.get('http://localhost:4000/transactions/myTransactions').then(res => {
      setTrasactions(res.data.data)
      const t = balance(res.data.data)
      setTotal(t)
    })
  }, []) */
  // Not necesary

  useEffect(() => {
    axios.get('https://limitless-oasis-80610.herokuapp.com/transactions/myTransactions').then(res => {
      setTrasactions(res.data.data)
      const t = balance(res.data.data)
      setTotal(t)
    })
  }, [loadingTransaction])

  const onCloseModal = () => {
    setShowModal(!showModal)
    setEdit(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (edit) {
      axios.patch('https://limitless-oasis-80610.herokuapp.com/transactions', transac).then(res => {
        setLoading(!loadingTransaction)
      })
    } else {
      axios.post('https://limitless-oasis-80610.herokuapp.com/transactions', transac).then(res => {
        setLoading(!loadingTransaction)
        setTransaction({
          concept: '',
          amount: 0,
          date: Date.now(),
          type: ''
        })
      })
    }
  }

  const handleChange = (e) => {
    setTransaction({
      ...transac,
      [e.target.name]: e.target.value
    })
  }

  const handleDelete = (e, id) => {
    axios.delete(`https://limitless-oasis-80610.herokuapp.com/transactions/${id}`).then(res => {
      setLoading(!loadingTransaction)
    })
  }

  const handleUpdate = (e, item) => {
    setEdit(true)

    setTransaction({
      ...transac,
      id: item.id,
      type: item.type,
      concept: item.concept,
      amount: item.amount
    })
    setShowModal(!showModal)
  }

  return (
        <>
          <Helmet>
            <title>Transaction Tracker - Home</title>
            <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />

          </Helmet>

          <GlobalDiv >
              <Header onOpen={onCloseModal} balance={total} />
              <TransactionList transactions={transactions} onDelete={handleDelete} onUpdate={handleUpdate} />
          </GlobalDiv>
          <ModalForm isOpen={showModal} onClose={onCloseModal} onSubmit={handleSubmit} onChange={handleChange} value={transac} edit={edit} />
        </>
  )
}
