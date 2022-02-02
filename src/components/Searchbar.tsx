import { TextField } from '@mui/material'
import { ChangeEvent, KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
    query?: string
    handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
    handleSubmit?: (e: KeyboardEvent<HTMLDivElement>) => void
}

export default function Searchbar({ query, handleChange, handleSubmit }: Props) {

    const navigate = useNavigate()

    const handleNavigation = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.code === 'Enter') {
            navigate('/search-results')
        }
    }

    return (
        <TextField
            label="Search"
            variant="outlined" 
            fullWidth
            value={query}
            onChange={handleChange}
            onKeyDown={handleSubmit}
            onKeyUp={handleNavigation}
        />
    )
}