import React, { useContext } from 'react'
import { Context } from '../Contex'

import { SubmitedButton } from '../components/SubmitedButton'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <h1>User</h1>
      <SubmitedButton onClick={removeAuth}>Cerrar sesión</SubmitedButton>
    </>
  )
}
