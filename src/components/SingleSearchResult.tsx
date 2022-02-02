import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import { ISearchResults } from "../types/searchResults"

interface Props {
    result: ISearchResults
}

export default function SingleSearchResult({ result }: Props) {
    return (
        <Card style={{ padding: '1rem' }}>
            <Link to={`/track/${result.id}`}><Typography variant="h5" noWrap>{result.title_short}</Typography></Link>
            <Typography variant="h6" noWrap>{result.artist.name}</Typography>
            <CardMedia
                component="img"
                image={result.album.cover_xl}
                alt={result.album.title}
            />
        </Card>
    )
}
