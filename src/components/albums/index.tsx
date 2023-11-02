import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'store'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import useGetAlbums from './useGetAlbums';

const Albums = () => {
  const navigate = useNavigate()
  useGetAlbums()
  const { albums } = useAppSelector(state => state.users)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead style={{ backgroundColor: 'grey' }}>
          <TableRow>
            <TableCell>Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {albums && albums.map(album => (
            <TableRow
              style={{ cursor: 'pointer' }}
              onClick={() => navigate(`/photos/${album.id}`)}
              key={album.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {album.title}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Albums
