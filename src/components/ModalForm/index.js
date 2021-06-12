import React from 'react'
import { Modal } from '../Modal'
import { Form } from './styles'
import SendIcon from '@material-ui/icons/Send'
import { IconButton } from '@material-ui/core'

export const ModalForm = (props) => {
  return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <Form onSubmit={props.onSubmit}>
                <label>Concept: </label>
                <input placeholder="Example: Spotify" name="concept" value={props.value.concept} onChange={props.onChange} />

                <br />

                <label>Amount: </label>
                <input type="number" placeholder="0" name="amount" value={props.value.amount} onChange={props.onChange} />

                <br />

                <label>Type: </label>
                <select name="type" value={props.value.type} onChange={props.onChange} disabled={props.edit} >
                    <option>Income</option>
                    <option>Expense</option>
                </select>

                <br />

                <label>Date: </label>
                <input type="date" name="date" value={props.value.date} onChange={props.onChange} />
                <IconButton color='secondary' type='submit'>
                    Send <SendIcon />
                </IconButton>
            </Form>
        </Modal>
  )
}
