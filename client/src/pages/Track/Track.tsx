import React, {useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Button, Grid, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {requestTrack, setTrack} from "../../Redux/track/track-slice";
import {State} from "../../Redux/redux-store";
import {useInput} from "../../hooks/useInput";
import {setComment} from "../../Redux/comment/comment-slice";

export const Track = () => {
    const location = useLocation();
    const {track} = useSelector((state: State) => state.track)
    const username = useInput('')
    const text = useInput('')

    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(requestTrack(location.pathname.split('/')[2]))
    }, [])

    const addComment = () => {
        if (track) {
            /*const formData = new FormData()
            formData.append('username', username.value)
            formData.append('text', text.value)
            formData.append('trackId', Number(track._id))*/
            try {
                // @ts-ignore
                dispatch(setComment({
                    username: username.value,
                    text: text.value,
                    trackId: String(track._id)
                })).then(() =>
                    // @ts-ignore
                    dispatch(requestTrack(location.pathname.split('/')[2]))
                )
            } catch (e: any) {
                console.log(e)
            }
        }
    }

    return (
        <>
            {track &&
            <div style={{width: '100vw'}}>
                <Link to={'/tracks'} style={{textDecoration: 'none', color: 'black'}}>
                    <Button variant={'outlined'} style={{fontSize: 32}}>To list</Button>
                </Link>
                <Grid container style={{margin: '20px 0'}}>
                    <img src={'http://localhost:3000/' + track.picture} width={200} height={200}/>
                    <div style={{marginLeft: 30}}>
                        <h1>Name: {track.name}</h1>
                        <h1>Artist: {track.artist}</h1>
                        <h1>Listens: {track.listens}</h1>
                    </div>
                </Grid>
                <h1>Words:</h1>
                <p>{track.text}</p>
                <h1>Comments:</h1>
                <Grid container>
                    <TextField {...username} label={'Name'} value={username.value} onChange={username.handleChange}
                               fullWidth/>
                    <TextField {...text} label={'Comment'} value={text.value} onChange={text.handleChange}
                               fullWidth multiline rows={4}/>
                    <Button onClick={addComment}>Send</Button>
                </Grid>
                <div>
                    {track.comments.map(comment =>
                        <div>
                            <div>Author: {comment.username}</div>
                            <div>Comment: {comment.text}</div>
                        </div>)}
                </div>
            </div>
            }
        </>
    )
        ;
};