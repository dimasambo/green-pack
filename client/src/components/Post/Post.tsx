import React, {FC, useEffect} from 'react';
import {Avatar, Card, CardContent, Divider, Typography} from "@material-ui/core";
import {Gallery} from "react-grid-gallery";
import {IPost} from "../../types/post";
import {makeStyles, Theme} from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";

interface IProps {
    post: IPost
}

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    title: {
        fontWeight: 'bold',
    },
    author: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(1),
    },
    avatar: {
        marginRight: theme.spacing(1),
    },
    divider: {
        marginBottom: theme.spacing(1),
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

const Post: FC<IProps> = ({post}) => {
    const classes = useStyles();

    return (
        <Card key={post.id} className={classes.card}>
            <CardContent>
                <Typography variant="h6" component="h2" className={classes.title}>
                    {post.title}
                </Typography>
                <div className={classes.author}>
                    <Avatar className={classes.avatar}>{post.author.email[0].toUpperCase()}</Avatar>
                    <Typography variant="body2">{post.author.email}</Typography>
                </div>
                <Divider className={classes.divider} />
                <Typography variant="body1">{post.content}</Typography>
                {post.images && (
                    post.images.map(image =>
                        <CardMedia className={classes.media} image={`http://localhost:3000/${image}`} title={post.title}/>
                    )
                )}
            </CardContent>
        </Card>
    );
};

export default Post;