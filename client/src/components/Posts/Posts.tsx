import React, {useEffect} from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Avatar, Divider } from '@material-ui/core';
import {IPost} from "../../types/post";
import { Gallery } from "react-grid-gallery";
import Post from "../Post/Post";



interface PostsProps {
    posts: IPost[];
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '50px 16px',
    }
}));

export const Posts: React.FC<PostsProps> = ({ posts }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {posts.map((post) => (
                <Post post={post} />
            ))}
        </div>
    );
};