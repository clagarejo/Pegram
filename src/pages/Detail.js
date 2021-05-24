import React from 'react'

import { Layout } from '../components/Layout'
import { PhotoCardWithQuery } from '../container/PhotoCardWithcQuery'

export const Detail = ({ detailId }) => (
  <Layout title={`Fotografía ${detailId}`}>
    <PhotoCardWithQuery id={detailId} />
  </Layout>
)
