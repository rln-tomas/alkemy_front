import React from 'react'
import ReactDOM from 'react-dom'
import { ButtonCloseModal, DivModal, DivModalContainer, ButtonCloseIcon } from './styles'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

export const Modal = (props) => {
  if (!props.isOpen) {
    return null
  }
  return (
    ReactDOM.createPortal(
        <DivModal>
            <DivModalContainer>
                <ButtonCloseModal onClick={props.onClose}>
                    <ButtonCloseIcon />
                </ButtonCloseModal>
                {props.children}
            </DivModalContainer>
        </DivModal>
        , document.getElementById('modal'))
  )
}
