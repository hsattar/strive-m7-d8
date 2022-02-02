import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Card, CardMedia, Typography } from "@mui/material"
import axios from "axios"
import { ITrackDetails } from '../types/searchResults'

export default function TrackDetails() {

    const baseURL = 'https://striveschool-api.herokuapp.com/api/deezer'
    const { trackId } = useParams()
    const [trackInfo, setTrackInfo] = useState<ITrackDetails | null>(null)

    const fetchData = async (url: string) => {
        try {
            const response = await axios({ baseURL, url })
            setTrackInfo(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData(`/track/${trackId}`)
    }, [trackId])

    return (
        <Card style={{ padding: '1rem' }}>
            <Typography variant="h5" noWrap>{trackInfo?.title}</Typography>
            <Typography variant="h6" noWrap>{trackInfo?.artist?.name}</Typography>
            <CardMedia
                component="img"
                image={trackInfo?.album?.cover_xl}
                alt={trackInfo?.album?.title}
            />
        </Card>
    )
}
