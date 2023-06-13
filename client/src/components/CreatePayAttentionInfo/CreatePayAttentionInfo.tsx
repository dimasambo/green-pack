import React, {FC} from 'react';
import {StyledCreatePayAttentionInfo} from './StyledCreatePayAttentionInfo';
import {Grid, TextField} from "@mui/material";
import {IReturnedValues} from "../../hooks/useInput";

interface IProps {
    title: IReturnedValues
    description: IReturnedValues
}

export const CreatePayAttentionInfo: FC<IProps> = ({description, title}) => {
    return (
        <StyledCreatePayAttentionInfo>
            <Grid container direction={'column'} className={'trackInfo__wrapper'}>
                <TextField {...title} className={'field'} label={'Title'}
                           value={title.value} onChange={title.handleChange}/>
                <TextField {...description} className={'field'} label={'Description'}
                           value={description.value} onChange={description.handleChange}/>
            </Grid>
        </StyledCreatePayAttentionInfo>
    );
};