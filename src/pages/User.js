import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { Context } from '../Contex'

import { SubmitedButton } from '../components/SubmitedButton'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <Helmet>
        <title>Petgram - Tu perfil</title>
        <meta name='description' content='Aquí esta tu perfil' />
      </Helmet>
      <h1>User</h1>
      <SubmitedButton onClick={removeAuth}>Cerrar sesión</SubmitedButton>
    </>
  )
}
