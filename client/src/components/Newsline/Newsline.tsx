import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {IPost} from "../../types/post";

interface NewslineProps {
    news: IPost[]
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    card: {
        width: '100%',
        maxWidth: 600,
        marginBottom: theme.spacing(2),
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

export const Newsline: React.FC<NewslineProps> = ({news}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {news.map((article, index) => (
                <Card key={index} className={classes.card}>
                    <CardHeader
                        title={article.title}
                        subheader={`by ${article.author.email} on 
                        ${article.createdAt.split('.')[0].split('T')[0]} 
                        ${article.createdAt.split('.')[0].split('T')[1]}`
                        }
                    />
                    {article.images && (
                        article.images.map(image =>
                            <CardMedia className={classes.media} image={`http://localhost:3000/${image}`} title={article.title}/>
                        )
                    )}
                    {/*{article.videos && (
                        article.videos.map(video =>
                            <CardMedia component="video" src={video} title={article.title} controls/>
                        )
                    )}*/}
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {article.content}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
