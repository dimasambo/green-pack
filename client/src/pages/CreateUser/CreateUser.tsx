import React from 'react';
import {StyledLogin} from "../Login/StyledLogin";
import {RegistrationForm} from "../../components/RegistrationForm/RegistrationForm";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {State} from "../../Redux/redux-store";
import {CreateUserForm} from "../../components/CreateUserForm/CreateUserForm";

export const CreateUser = () => {
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
            <h1>CreateUser</h1>
            <CreateUserForm />
        </StyledLogin>
    );
};