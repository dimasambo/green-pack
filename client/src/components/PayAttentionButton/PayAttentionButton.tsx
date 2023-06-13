import React, {FC, useRef} from 'react';
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {increasePayAttentions} from "../../Redux/pay-attentions/pay-attentions-slice";
import {State} from "../../Redux/redux-store";
import {useNavigate} from "react-router-dom";

interface IProps {
    payAttentionId: number
    payAttentions: number
}

export const PayAttentionButton: FC<IProps> = ({payAttentionId, payAttentions}) => {
    const {isAuthorized} = useSelector((state: State) => state.auth)
    const ref = useRef<HTMLInputElement | any>()
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handlerClick = () => {
        if(isAuthorized) {
            if (payAttentions < 1) {
                // @ts-ignore
                dispatch(increasePayAttentions(payAttentionId))
                    .then(() => ref.current.textContent = `${Number(ref.current.textContent) + 1}`)
            }
        } else {
            navigate('/login')
        }
    }

    return (
        <Button onClick={handlerClick}
                style={{
                    background: 'dodgerblue',
                    color: 'white',
                    width: '60%',
                    margin: '0 auto',
                    marginBottom: '15px',
                    display: 'block',
                    padding: '10px'}}>
            Pay Attention
            <span ref={ref} style={{float: 'right', transform: 'translateX(-15px)'}}>{payAttentions}</span>
        </Button>
    );
};