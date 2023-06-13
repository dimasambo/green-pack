import {FC, useEffect} from "react";
import {Box, Button, Card, Grid} from "@mui/material";
import { Link } from "react-router-dom";
import {TrackList} from "../../components/TrackList/TrackList";
import {useDispatch, useSelector} from "react-redux";
import {requestTracks} from "../../Redux/track/track-slice";
import {State} from "../../Redux/redux-store";

export const Tracks: FC = () => {
    const dispatch = useDispatch()
    const {tracks, error} = useSelector((state: State) => state.track)

    useEffect(() => {
        // @ts-ignore
        dispatch(requestTracks())
    }, [])

    if(error) {
        return <Grid container>
            <h1>{error}</h1>
        </Grid>
    }

    return <Grid container>
        <Card style={{width: '900px'}}>
            <Box p={3}>
                <Grid container justifyContent={'space-between'}>
                    <h1>Tracks List</h1>
                    <Link to={'/tracks/create'}><Button>Download</Button></Link>
                </Grid>
            </Box>
            <TrackList tracks={tracks} />
        </Card>
    </Grid>
}