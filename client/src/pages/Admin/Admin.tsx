import React from 'react';
import {makeStyles, Theme} from "@material-ui/core/styles";
import {Card, CardContent} from "@mui/material";
import {useSelector} from "react-redux";
import {State} from "../../Redux/redux-store";
import {Link, Navigate} from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        width: '100%',
        marginBottom: theme.spacing(2),
    }
}));

export const Admin = () => {
    const {currentUser, isAuthorized} = useSelector((state: State) => state.auth)
    const classes = useStyles();
    let isAdmin = false
    currentUser?.roles.forEach(role => {
        if(role.value === 'ADMIN') {
            isAdmin = true
        }
    })

    if (!isAuthorized || !isAdmin) return <Navigate replace to={'/login'} />
    return (
        <div>
            <Card className={classes.card}>
                <Link to={'/admin/create-user'}>
                    <CardContent>
                    Create User
                    </CardContent>
                </Link>
            </Card>
            <Card className={classes.card}>
                <Link to={'/admin/ban-user'}>
                    <CardContent>
                        Ban User
                    </CardContent>
                </Link>
            </Card>
        </div>
    );
};