import React, {FC, useState} from "react";
import {StepWrapper} from "../../components/StepWrapper/StepWrapper";
import {Button, Grid} from "@mui/material";
import {CreatePayAttentionInfo} from "../../components/CreatePayAttentionInfo/CreatePayAttentionInfo";
import {FileUpload} from "../../components/FileUpload/FileUpload";
import {useInput} from "../../hooks/useInput";
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import {setTrack} from "../../Redux/track/track-slice";
import {State} from "../../Redux/redux-store";
import {setPayAttention} from "../../Redux/pay-attentions/pay-attentions-slice";

export const CreatePayAttention: FC = () => {
    const navigate = useNavigate()
    const {currentUser, isAuthorized} = useSelector((state: State) => state.auth)

    const [activeStep, setActiveStep] = useState(0)
    const [picture, setPicture] = useState<any>(null)
    const title = useInput('')
    const description = useInput('')

    const dispatch = useDispatch()

    const handleNext = () => {
        if (activeStep !== 2) {
            setActiveStep(activeStep => activeStep + 1)
        } else {
            if (currentUser) {
                const formData = new FormData()
                formData.append('title', title.value)
                formData.append('content', description.value)
                formData.append('userId', String(currentUser.id))
                formData.append('images', picture)
                try {
                    // @ts-ignore
                    dispatch(setPayAttention(formData)).then(() => navigate('/pay-attention'))
                } catch (e: any) {
                    console.log(e)
                }
            }
        }
    }

    if (!isAuthorized) return <Navigate replace to="/login"/>
    return <div>
        <StepWrapper activeStep={activeStep}>
            {activeStep === 0 && <CreatePayAttentionInfo title={title} description={description}/>}
            {activeStep === 1 &&
                <div style={{
                    height: '90%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <FileUpload setFile={setPicture} accept={'image/*'}>
                        <Button>Upload Image</Button>
                    </FileUpload>
                    {picture && <div>1 image uploaded</div>}
                </div>
            }
            {activeStep === 2 &&
            <div style={{
                height: '90%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                Info Uploaded. Click 'Next' to create Pay Attention
            </div>
            }
        </StepWrapper>
        <Grid container justifyContent={'space-between'}>
            <Button disabled={activeStep === 0}
                    onClick={() => setActiveStep(activeStep => activeStep - 1)}>Prev</Button>
            <Button onClick={handleNext}>Next</Button>
        </Grid>
    </div>
}