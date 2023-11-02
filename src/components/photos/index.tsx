import { useAppSelector } from 'store'

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import useGetPhotos from './useGetPhotos'

const Gallery = () => {
  useGetPhotos()
  const { photos } = useAppSelector(state => state.users)
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {photos.map((photo) => (
        <ImageListItem  key={photo.url}>
          <img
            srcSet={`${photo.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${photo.url}?w=164&h=164&fit=crop&auto=format`}
            alt={photo.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default Gallery
