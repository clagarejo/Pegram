import React from 'react'

import { MdFavoriteBorder } from 'react-icons/md'
import { ImagWrapper, Img, Button } from './styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImagWrapper>
          <Img src={src} alt='Foto de perfil' />
        </ImagWrapper>
      </a>

      <Button type='button'>
        <MdFavoriteBorder size='32px' /> {likes} Likes!
      </Button>
    </article>
  )
}
