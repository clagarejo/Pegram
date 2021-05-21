import React from 'react'

import { SubmitedButton } from '../SubmitedButton'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, Error } from './styles'

export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input disabled={disabled} placeholder='Password' type='password' {...password} />
        <SubmitedButton disabled={disabled}>{title}</SubmitedButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
