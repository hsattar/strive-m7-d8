import axios from 'axios'
import { Container } from '@mui/material'
import { useState, KeyboardEvent, ChangeEvent } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Searchbar from "./components/Searchbar"

export default function App() {

  const baseURL = 'https://striveschool-api.herokuapp.com/api/deezer'

  const [query, setQuery] = useState('')
  // const [searchResults, searchResults] = useState()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)

  const handleSubmit = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.code === 'Enter') {
        alert(query)
      }
  }

  const axiosRequest = async (query: string) => {
    try {
       const response = await axios({ baseURL, url: query })
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <Router>
    <Navbar />
    <Container maxWidth="xl" style={{ marginTop: '1.5rem' }}>
      <Routes>
        <Route path="/" element={ <Searchbar query={query} handleChange={handleChange} handleSubmit={handleSubmit} /> } />
      </Routes>
    </Container>
    </Router>
  )
}
