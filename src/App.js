/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext, Suspense } from 'react'

import { Context } from './Contex'
import { Router, Redirect } from '@reach/router'

import { Home } from './pages/Home'
import { User } from './pages/User'
// import { Favs } from './pages/Favs'
import { Detail } from './pages/Detail'
import { Logo } from './components/Logo'
import { NotFound } from './pages/NotFound'
import { NavBar } from './components/NavBar'
import { Loading } from './components/Loading'
import { GlobalStyle } from './styles/GlobalStyle'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<Loading />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect noThrow from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}
