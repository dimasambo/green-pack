import React from 'react';
import {StyledLogin} from "./StyledLogin";
import {LoginForm} from "../../components/LoginForm/LoginForm";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

export const Login = () => {
    return (
        <StyledLogin>
            <h1>Login</h1>
            <LoginForm />
            <div>
                <span>Don't have an account?</span>
                <Link to={'/registration'}><Button>Create account</Button></Link>
            </div>
        </StyledLogin>
    );
};