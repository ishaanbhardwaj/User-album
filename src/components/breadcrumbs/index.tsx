import { useLocation } from "react-router-dom";

import Typography from '@mui/material/Typography';
import Crumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const Breadcrumbs = () => {

  const { pathname } = useLocation()
  
  return (
    <div style={{ padding: 20 }}>
      <Crumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/users">
          Users
        </Link>
        {(pathname.startsWith('/albums') || pathname.startsWith('/photos')) && <Link
          underline="hover"
          color="inherit"
        >
          Albums
        </Link>}
       {pathname.startsWith('/photos') && <Typography color="text.primary">Photos</Typography>}
      </Crumbs>
    </div>
  )
}

export default Breadcrumbs
