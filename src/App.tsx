import axios from 'axios'
import { Container } from '@mui/material'
import { useState, KeyboardEvent, ChangeEvent } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Searchbar from "./components/Searchbar"
import { ISearchResults } from './types/searchResults'
import SearchResultsPage from './components/SearchResultsPage'

export default function App() {

  const baseURL = 'https://striveschool-api.herokuapp.com/api/deezer'

  const [query, setQuery] = useState('')
  const [lastQuery, setLastQuery] = useState('')
  const [searchResults, setSearchResults] = useState<ISearchResults[]>([])

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
       setLastQuery(query)
       setQuery('')
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <BrowserRouter >
    <Navbar />
    <Container maxWidth="xl" style={{ marginTop: '1.5rem' }}>
      <Routes>
        <Route path="/" element={ <Searchbar query={query} handleChange={handleChange} handleSubmit={handleSubmit} /> } />
        <Route path="/search-results" element={ <SearchResultsPage query={query} handleChange={handleChange} handleSubmit={handleSubmit} lastQuery={lastQuery} data={searchResults} /> } />
      </Routes>
    </Container>
    </BrowserRouter >
  )
}
