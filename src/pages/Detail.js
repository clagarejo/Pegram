import React from 'react'

import { PhotoCardWithQuery } from '../container/PhotoCardWithcQuery'

export const Detail = ({ detailId }) => {
  return (
    <PhotoCardWithQuery id={detailId} />
  )
}
