import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import { Loading } from '../components/Loading'
import { ListOfFavs } from '../components/ListOfFavs'

const GET_FAVS = gql`
query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`
export const RenderProp = ({ loading, error, data }) => {
  if (loading) return <Loading />
  if (error) return <p>Error...</p>
  const { favs } = data

  return <ListOfFavs favs={favs} />
}

export const FavsWithQuery = () => (
  <Query query={GET_FAVS} fetchPolicy='cache-and-network'>
    {RenderProp}
  </Query>
)
