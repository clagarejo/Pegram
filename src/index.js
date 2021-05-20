import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Contex from './Contex'

import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-edsf8xpy2.now.sh/graphql'
})

ReactDOM.render(
  <Contex.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Contex.Provider>,
  document.getElementById('app')
)
