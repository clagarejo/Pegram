/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'

import { FavButton } from '../FavButton'
import { Article, ImagWrapper, Img } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518001589401-1743b61d1def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 100, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [show, ref] = useNearScreen()
  const [liked, setLiked] = useLocalStorage(key, false)

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImagWrapper>
              <Img src={src} alt='Foto de perfil' />
            </ImagWrapper>
          </a>

          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  !liked && toggleLike({
                    variables: {
                      input: { id }
                    }
                  })

                  setLiked(!liked)
                }

                return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
              }
            }
          </ToggleLikeMutation>
        </>
      )}
    </Article>
  )
}
