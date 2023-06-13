import React, {FC} from 'react';
import {Card, Container, Grid, Step, StepLabel, Stepper} from "@mui/material";

interface IProps {
    children: React.ReactNode;
    activeStep: number
}

const steps = ['Pay Attention Info', 'Download Picture', 'Finishing']

export const StepWrapper: FC<IProps> = ({activeStep, children}) => {
    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step, index) =>
                    <Step key={index} completed={activeStep > index}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                )}
            </Stepper>
            <Grid container justifyContent={'center'} style={{margin: '70px 0', height: 270}}>
                <Card style={{width: 600}}>
                    {children}
                </Card>
            </Grid>
        </Container>
    );
};