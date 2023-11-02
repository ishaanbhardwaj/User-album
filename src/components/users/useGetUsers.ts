import { PATH_USERS } from 'constants/request-urls'
import { useEffect } from 'react'
import { updateUserList } from 'slices/users'
import { AppDispatch, useAppDispatch } from 'store'

const getUsers = () => (dispatch: AppDispatch) => {
  return fetch(PATH_USERS)
    .then(res => res.json())
    .then(data => {
      dispatch(updateUserList(data))
    })
    .catch(err => console.error(err))
}

const useGetUsers = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [])
}

export default useGetUsers