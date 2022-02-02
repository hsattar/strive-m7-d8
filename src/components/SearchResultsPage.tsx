import { ChangeEvent, KeyboardEvent } from 'react'
import Searchbar from "./Searchbar"
import { ISearchResults } from "../types/searchResults"
import SingleSearchResult from "./SingleSearchResult"
import { Grid, Typography } from "@mui/material"

interface Props {
    query: string
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (e: KeyboardEvent<HTMLDivElement>) => void
    lastQuery: string
    data: ISearchResults[]
}

export default function SearchResultsPage({ query, handleChange, handleSubmit, lastQuery, data }: Props) {
    return (
        <>
        <Searchbar query={query} handleChange={handleChange} handleSubmit={handleSubmit} />
        <Typography variant="h4" style={{ marginTop: '.5rem' }} >{`${data.length} results for ${lastQuery}`}</Typography>
        <Grid container justifyContent="center" spacing={2} style={{ marginTop: '.5rem' }}>
        { data.map(result => (
            <Grid item xs={6} md={4} lg={3} key={result.id}>
                <SingleSearchResult result={result} />
            </Grid>
        )) }
        </Grid>
        </>   
    )
}
