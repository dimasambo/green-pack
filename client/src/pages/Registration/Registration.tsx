import React from 'react';
import {StyledRegistration} from "./StyledRegistration";
import {LoginForm} from "../../components/LoginForm/LoginForm";
import {RegistrationForm} from "../../components/RegistrationForm/RegistrationForm";

export const Registration = () => {
    return (
        <StyledRegistration>
            <h1>Registration</h1>
            <RegistrationForm />
        </StyledRegistration>
    );
};