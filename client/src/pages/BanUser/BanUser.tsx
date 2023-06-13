import React from 'react';
import {StyledLogin} from "../Login/StyledLogin";
import {LoginForm} from "../../components/LoginForm/LoginForm";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {State} from "../../Redux/redux-store";

export const BanUser = () => {
    const {currentUser, isAuthorized} = useSelector((state: State) => state.auth)
    let isAdmin = false
    currentUser?.roles.forEach(role => {
        if(role.value === 'ADMIN') {
            isAdmin = true
        }
    })

    if (!isAuthorized || !isAdmin) return <Navigate replace to={'/login'} />
    return (
        <StyledLogin>
            <h1>BanUser</h1>
            <LoginForm />
        </StyledLogin>
    );
};