import React from 'react'

import { Form, Input, Button, Title, Div, Label } from './styles'
import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Div>
          <Input type='text' id='email' name='email' {...email} />
          <Label for='email'>Escribe tu nombre</Label>
        </Div>

        <Div>
          <Input type='password' id='pass' name='pass' {...password} />
          <Label for='pass'>Ejemplo@ejemplo.com</Label>
        </Div>
        <Button>{title}</Button>
      </Form>
    </>
  )
}
