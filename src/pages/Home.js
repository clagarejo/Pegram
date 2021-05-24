import React from 'react'
import { Helmet } from 'react-helmet'

import { ListOfPhotoCard } from '../container/ListOfPhotoCard'
import { ListOfCategories } from '../components/ListOfCategories'

const HomePage = ({ id }) => {
  return (
    <>
      <Helmet>
        <title>Petgram - </title>
        <meta name='description' content='Aqui encontraras las fotos de tus mascotas favoritas' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCard categoryId={id} />
    </>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})
