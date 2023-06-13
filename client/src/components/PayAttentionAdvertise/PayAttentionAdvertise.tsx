import React, {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {requestImportantPayAttentions} from "../../Redux/pay-attentions/pay-attentions-slice";
import {StyledPayAttentionAdvertise} from './StyledPayAttentionAdvertise'
import {State} from "../../Redux/redux-store";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {IPayAttention} from "../../types/pay-attention";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
    name: {
        fontWeight: 'bold',
        marginBottom: theme.spacing(1),
    }
}));

export const PayAttentionAdvertise: FC = ({}) => {
    const classes = useStyles();
    const {importantPayAttentions} = useSelector((state: State) => state.payAttention)
    const [count, setCount] = useState(0)
    const [currentImportantPayAttentions, setCurrentImportantPayAttentions] = useState<IPayAttention>(importantPayAttentions[0])
    const dispatch = useDispatch()

    const getRandomValue = (x: number, y: number) => {
        if (x >= y) {
            throw new Error("Invalid range. 'x' must be less than 'y'.");
        }

        const minValue = Math.ceil(x);
        const maxValue = Math.floor(y);

        return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    }

    useEffect(() => {
        // @ts-ignore
        dispatch(requestImportantPayAttentions())
        setInterval(() => {
            setCurrentImportantPayAttentions(importantPayAttentions[5/*getRandomValue(0, importantPayAttentions.length - 1)*/])
        }, 10000)
    }, [])

    return <StyledPayAttentionAdvertise>
        <Link to={'/pay-attention'}>
            <div className={'firstBlock'}>
                <div className={'warningIcon'}></div>
                <div className={'title'}>
                    {currentImportantPayAttentions.title.length < 20
                        ? currentImportantPayAttentions.title
                        : currentImportantPayAttentions.title.slice(0, 20) + '...'}
                </div>
            </div>
            <div className={'content'}>
                {currentImportantPayAttentions.content.length < 40
                    ? currentImportantPayAttentions.content
                    : currentImportantPayAttentions.content.slice(0, 40) + '...'}
            </div>
            <div className={'createdDetails'}>
                <div className={'author'}>
                    by {currentImportantPayAttentions.author.email}
                </div>
                <div className={'date'}>
                    on {currentImportantPayAttentions.createdAt.split('.')[0].split('T')[0]}
                    {currentImportantPayAttentions.createdAt.split('.')[0].split('T')[1]}
                </div>
            </div>
        </Link>
    </StyledPayAttentionAdvertise>
}