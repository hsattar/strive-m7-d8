import Searchbar from "./Searchbar"
import { ISearchResults } from "../types/searchResults"
import SingleSearchResult from "./SingleSearchResult"
import { Grid, Typography } from "@mui/material"

interface Props {
    lastQuery: string
    data: ISearchResults[]
}

export default function SearchResultsPage({ lastQuery, data }: Props) {
    return (
        <>
        <Searchbar />
        <Typography variant="h4" style={{ marginTop: '.5rem' }} >{lastQuery}</Typography>
        <Grid container spacing={2} style={{ marginTop: '.5rem' }}>
        { data.map(result => (
            <Grid item xs={6} key={result.id}>
                <SingleSearchResult result={result} />
            </Grid>
        )) }
        </Grid>
        </>   
    )
}
