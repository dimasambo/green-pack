import React, {FC} from 'react';
import {ITrack} from "../../types/track";
import {Card, Grid, IconButton} from "@mui/material";
import {StyledTrackItem} from './StyledTrackItem';
import {Delete, Pause, PlayArrow} from "@mui/icons-material";
import {Link} from 'react-router-dom';
import {playTrack, setActive} from "../../Redux/player/player-slice";
import {useDispatch} from "react-redux";

interface ITrackItem {
    track: ITrack
    active?: boolean
}

export const TrackItem: FC<ITrackItem> = ({track, active = false}) => {
    const dispatch = useDispatch()

    const play = (e: any) => {
        e.preventDefault()
        dispatch(setActive(track))
        dispatch(playTrack())
    }

    return (
        <StyledTrackItem>
            <Link to={'/tracks/' + track._id}>
                <Card className={'player'}>
                    <IconButton onClick={play}>
                        {active
                            ? <Pause/>
                            : <PlayArrow/>
                        }
                    </IconButton>
                    <img src={'http://localhost:3000/' + track.picture} width={70} height={70}/>
                    <Grid className={'trackInfo__grid'} container direction={'column'}>
                        <div>{track.name}</div>
                        <div className={'artist'}>{track.artist}</div>
                    </Grid>
                    {active && <div>01:33 / 03:47</div>}
                    <IconButton onClick={e => e.preventDefault()} className={'deleteTrack__button'}>
                        <Delete/>
                    </IconButton>
                </Card>
            </Link>
        </StyledTrackItem>
    );
}