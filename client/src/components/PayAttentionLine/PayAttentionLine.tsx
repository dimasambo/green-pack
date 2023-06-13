import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {PayAttentionButton} from "../PayAttentionButton/PayAttentionButton";
import {IPayAttention} from "../../types/pay-attention";

interface PayAttentionLineProps {
    payAttentionPosts: IPayAttention[];
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

export const PayAttentionLine: React.FC<PayAttentionLineProps> = ({ payAttentionPosts }) => {
    const classes = useStyles();
    const payAttentionsArr: IPayAttention[] = [...payAttentionPosts]

    return (
        <div className={classes.root}>
            {payAttentionsArr.reverse().map((payAttention, index) => (
                <Card key={index} className={classes.card}>
                    <CardHeader
                        title={payAttention.title}
                        subheader={`by ${payAttention.author.email} on 
                        ${payAttention.createdAt.split('.')[0].split('T')[0]} 
                        ${payAttention.createdAt.split('.')[0].split('T')[1]}`
                        }
                    />
                    {payAttention.images && (
                        payAttention.images.map(image =>
                            <CardMedia className={classes.media} image={`http://localhost:3000/${image}`} title={payAttention.title} />
                        )
                    )}
                    {/*{payAttention.videos && (
                        payAttention.videos.map(video =>
                            <CardMedia component="video" src={video} title={payAttention.title} controls />
                        )
                    )}*/}
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {payAttention.content}
                        </Typography>
                    </CardContent>
                    <PayAttentionButton payAttentionId={payAttention.id} payAttentions={payAttention.payAttentions}/>
                </Card>
            ))}
        </div>
    );
};
