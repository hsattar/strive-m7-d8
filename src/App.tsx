import axios from 'axios'
import { Container } from '@mui/material'
import { useState, KeyboardEvent, ChangeEvent } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Searchbar from "./components/Searchbar"
import { SearchResults } from './types/searchResults'
import { useNavigate } from 'react-router-dom'

export default function App() {

  const baseURL = 'https://striveschool-api.herokuapp.com/api/deezer'

  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResults[]>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)

  const handleSubmit = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.code === 'Enter') {
        axiosRequest(`/search?q=${query}`)
      }
  }

  const axiosRequest = async (url: string) => {
    try {
       const response = await axios({ baseURL, url })
       setSearchResults(response.data.data)
       setQuery('')
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
