import { TextField } from '@mui/material'
import { ChangeEvent, KeyboardEvent } from 'react'

interface Props {
    query: string
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (e: KeyboardEvent<HTMLDivElement>) => void
}

export default function Searchbar({ query, handleChange, handleSubmit }: Props) {

    return (
        <TextField
            label="Search"
            variant="outlined" 
            fullWidth
            value={query}
            onChange={handleChange}
            onKeyUp={handleSubmit}
        />
    )
}