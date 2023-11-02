import { PATH_PHOTOS } from 'constants/request-urls'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { updatePhotosList } from 'slices/users'
import { AppDispatch, useAppDispatch } from 'store'

const getPhotos = (albumId: string) => (dispatch: AppDispatch) => {
  return fetch(`${PATH_PHOTOS}${albumId}`)
    .then(res => res.json())
    .then(data => {
      dispatch(updatePhotosList(data))
    })
    .catch(err => console.error(err))
}

const useGetPhotos = () => {
  const { albumId } = useParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(albumId) dispatch(getPhotos(albumId))
  }, [albumId])
}

export default useGetPhotos