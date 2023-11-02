import { PATH_ALBUMS } from 'constants/request-urls'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { updateAlbumsList } from 'slices/users'
import { AppDispatch, useAppDispatch } from 'store'

const getAlbums = (userId: string) => (dispatch: AppDispatch) => {
  return fetch(`${PATH_ALBUMS}${userId}`)
    .then(res => res.json())
    .then(data => {
      dispatch(updateAlbumsList(data))
    })
    .catch(err => console.error(err))
}

const useGetAlbums = () => {
  const { userId } = useParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(userId) dispatch(getAlbums(userId))
  }, [userId])
}

export default useGetAlbums