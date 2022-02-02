import { Container } from '@mui/material'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Searchbar from "./components/Searchbar"

export default function App() {
  return (
    <Router>
    <Navbar />
    <Container maxWidth="xl" style={{ marginTop: '1.5rem' }}>
      <Routes>
        <Route path="/" element={ <Searchbar /> } />
      </Routes>
    </Container>
    </Router>
  )
}
