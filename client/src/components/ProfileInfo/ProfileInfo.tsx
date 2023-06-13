import React, {useRef, useState} from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Button} from "@mui/material";
import {FileUpload} from "../FileUpload/FileUpload";
import {logout, updateUserPhoto} from "../../Redux/auth/auth-slice";
import {useDispatch, useSelector} from "react-redux";
import {State} from "../../Redux/redux-store";
import {useNavigate} from "react-router-dom";

interface ProfileProps {
    name?: string;
    bio?: string;
    avatarUrl?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(3),
    },
    avatar: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        marginBottom: theme.spacing(2),
    },
    name: {
        fontWeight: 'bold',
        marginBottom: theme.spacing(1),
    },
    bio: {
        textAlign: 'center',
    },
}));

export const ProfileInfo: React.FC<ProfileProps> = ({name = 'Dima', bio = 'Bio', avatarUrl = "123"}) => {
    const classes = useStyles();
    const ref = useRef<HTMLInputElement | any>()
    const [picture, setPicture] = useState<any>(null)
    const {currentUser} = useSelector((state: State) => state.auth)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleSubmit = () => {
        if (currentUser) {
            try {
                // @ts-ignore
                dispatch(updateUserPhoto({id: currentUser.id, image: picture}))
            } catch (e: any) {
                console.log(e)
            }
        }
    }

    const handlerLogout = () => {
        // @ts-ignore
        dispatch(logout())
        navigate('/login')
    }

    return (
        <Box className={classes.root}>
            <FileUpload setFile={setPicture} accept={'image/*'}>
                {currentUser && <Avatar alt={currentUser.email} src={avatarUrl} className={classes.avatar}/>}
            </FileUpload>
            {picture && <div>
                <span>1 file selected</span>
                <Button onClick={handleSubmit}>Confirm</Button>
            </div>}
            <Typography variant="h5" className={classes.name}>
                {currentUser?.email}
            </Typography>
            <Typography variant="body1" className={classes.bio}>
                {bio}
            </Typography>
            <Button onClick={handlerLogout}>
                Logout
            </Button>
        </Box>
    );
};