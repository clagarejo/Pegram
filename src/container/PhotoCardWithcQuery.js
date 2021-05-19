import React from 'react'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { Loading } from '../components/Loading'
import { PhotoCard } from '../components/PhotoCard'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const renderProp = ({ loading, error, data = { photo: {} } }) => {
  if (loading) return <Loading />
  if (error) return <p>Ups, algo anda mal</p>

  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
)
