import React from 'react'

import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyle'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { ListOfCategories } from './components/ListOfCategories'

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCard />
  </>
)
