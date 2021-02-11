import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Form from "react-bootstrap/Form"
import styled from "styled-components";
import {colors} from "@material-ui/core";

const Uni = styled.p`
  font-weight: 700;
  margin-bottom: 0;
  font-size: 16px;`

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['', '', ''];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return [<Form className="mt-4">
                <Form.Group controlId="formBasicName">
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="E-mail" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Create Password" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>


                <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                    <option value="0">Profile</option>
                    <option value="1">Travel Student</option>
                    <option value="2">Buddy</option>
                    <option value="3">Travel Student & Buddy</option>
                </Form.Control>

            </Form>];
        case 1:
            return [
                <div>
                <Uni>Home University</Uni>
                <Form>
                {['radio'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`default ${type}`}
                    />

                    <Form.Check
                        type={type}
                        id={`${type}`}
                        label={`${type}`}
                    />

                </div>
            ))}</Form>
                </div>
            ];
        case 2:
             return [
            <div>
                <Uni>Destination University</Uni>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                            <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                            />

                            <Form.Check
                                type={type}
                                id={`${type}`}
                                label={`${type}`}
                            />

                        </div>
                    ))}</Form>
            </div>
        ];
        default:
            return 'Unknown stepIndex';
    }
}

export default function HorizontalLabelPositionBelowStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className="col-12">
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div className="d-flex">
                            <div className="col-6">
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Back
                            </Button>
                            </div>
                            <div className="col-6" style={{textAlign: "end"}}>
                            <Button variant="contained" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </div>
    );
}
