import React from 'react'
import { Button } from './styles'

export const SubmitedButton = ({ children, disabled, onClick }) => {
  return <Button onClick={onClick} disabled={disabled}>{children}</Button>
}
