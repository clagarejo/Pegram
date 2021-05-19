/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'

import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyle'
import { ListOfPhotoCard } from './container/ListOfPhotoCard'
import { ListOfCategories } from './components/ListOfCategories'
import { PhotoCardWithQuery } from './container/PhotoCardWithcQuery'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <>
            <ListOfCategories />
            <ListOfPhotoCard categoryId={2} />
          </>
      }
    </>
  )
}
