import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

interface User {
  id: string
  name: string
  username: string
  email: string
  phone: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
  },
}

interface Albums {
  userId: string
  id: string
  title: string
}

interface Photos {
  albumId: string
  id: string
  title: string
  url: string
  thumbnailUrl: string
}

interface UserState {
  userList: User[]
  albums: Albums[]
  photos: Photos[]
}

const initialState: UserState = {
  userList: [],
  albums: [],
  photos: [],
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updateUserList(state: UserState, action: PayloadAction<User[]>) {
      state.userList = action.payload
    },
    updateAlbumsList(state: UserState, action: PayloadAction<Albums[]>) {
      state.albums = action.payload
    },
    updatePhotosList(state: UserState, action: PayloadAction<Photos[]>) {
      state.photos = action.payload
    },
  },
})

export const {
  updateUserList,
  updateAlbumsList,
  updatePhotosList,
} = userSlice.actions

export default userSlice.reducer
