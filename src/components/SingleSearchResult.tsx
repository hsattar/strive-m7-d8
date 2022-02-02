import { Card } from "@mui/material"
import { ISearchResults } from "../types/searchResults"

interface Props {
    result: ISearchResults
}

export default function SingleSearchResult({ result }: Props) {
    return (
        <Card style={{ padding: '1rem' }}>
            {result.title}
        </Card>
    )
}
