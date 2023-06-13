import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from "@material-ui/core/Typography";

interface ProgressBarProps {
    value: number;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <LinearProgress variant="determinate" value={value} />
            <Typography variant="body1">{`${value}%`}</Typography>
        </div>
    );
};