import React from 'react'
import { Outlet, Route, Routes as RoutesRRD } from 'react-router-dom'

import Albums from 'components/albums'
import Breadcrumbs from 'components/breadcrumbs'
import Photos from 'components/photos'
import Users from 'components/users'

enum ROUTES_URL {
  ROOT = '/',
  USERS = 'users',
  ALBUMS = 'albums/:userId',
  PHOTOS = 'photos/:albumId'
}

const Account = () => {
  return (
    <React.Fragment>
      <Breadcrumbs />
      <Outlet />
    </React.Fragment>
  )
}

const Routes = () => {
  return (
    <RoutesRRD>
      <Route path={ROUTES_URL.ROOT} element={<Account />}>
        <Route path={ROUTES_URL.USERS} element={<Users />} />
        <Route path={ROUTES_URL.ALBUMS} element={<Albums />} />
        <Route path={ROUTES_URL.PHOTOS} element={<Photos />} />
      </Route>
    </RoutesRRD>
  )
}

export default Routes
