import React, {useEffect} from 'react';
import {StyledPayAttention} from "./StyledPayAttention";
import {PayAttentionLine} from "../../components/PayAttentionLine/PayAttentionLine";
import {useDispatch, useSelector} from "react-redux";
import {State} from "../../Redux/redux-store";
import {Link} from "react-router-dom";
import {requestAllPayAttentions} from "../../Redux/pay-attentions/pay-attentions-slice";
import {Button} from "@mui/material";

export const PayAttention: React.FC = ({}) => {
    const {isAuthorized} = useSelector((state: State) => state.auth)
    const {allPayAttentions} = useSelector((state: State) => state.payAttention)

    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(requestAllPayAttentions())
    }, [])

    return (
        <StyledPayAttention>
            <Link to={'/pay-attention/create'}>
                <div className={'createButton_box'}>
                    <Button className={'button'}>Create Pay Attention</Button>
                </div>
            </Link>
            <PayAttentionLine payAttentionPosts={allPayAttentions}/>
        </StyledPayAttention>
    );
};
