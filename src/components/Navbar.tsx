import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/"><Typography className='navbar' variant="h6" sx={{ flexGrow: 1 }}>Music</Typography></Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}