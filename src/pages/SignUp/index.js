import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Form from "react-bootstrap/Form"
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FirebaseConfig from "../../scripts/FirebaseConfig";
import {Link} from "react-router-dom";
import Header from "../../components/Header"


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

export default function HorizontalLabelPositionBelowStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordConfirmationError, setPasswordConfirmationError] = useState('');
    const [name, setName] = useState('');

    const handleSignUp = () =>{
        clearErrors();

        if (password === passwordConfirmation){
            FirebaseConfig
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(({user}) => console.log(user.uid))
                .catch((err) => {
                    switch (err.code){
                        case "auth/email-already-in-use":
                        case "auth/invalid-email":
                            setEmailError(err.message);
                            break;
                        case "auth/weak-password":
                            setPasswordError(err.message);
                            break;
                    }

                });
               console.log(name);

        }else{
            setPasswordConfirmationError("Your passwords are different!");
            console.log(passwordConfirmationError);
        }


    }
    /* const [user, setUser] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    */


    const handleNext = () => {
        if (activeStep === 2){
            if(passwordConfirmation === password){
                handleSignUp();
                console.log(steps.length);
            }else {
                console.log("não são iguais")
                setActiveStep(0);
                console.log(activeStep)

            }
        }else{
            setActiveStep((prevActiveStep) => prevActiveStep + 1)
            console.log(activeStep)

        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    } /*

    const authListener =() =>{
        FirebaseConfig.auth().onAuthStateChanged((user)=>{
            if(user){
                setUser(user);
            }else {
                setUser('');
            }


        })
    }

    useEffect(()=>{
        authListener();
    }, []);


*/



    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return [<Form className="mt-4">
                    <Form.Group controlId="formBasicName">
                        <Form.Control type="text"
                                      placeholder="Name"
                                      value={name}
                                      name="name"
                                      onChange={(e)=> setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email"
                                      placeholder="E-mail"
                                      value={email}
                                      name="email"
                                      onChange={(e)=> setEmail(e.target.value)}/>
                        <p className="errorMsg">{emailError}</p>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password"
                                      value={password}
                                      name="password"
                                      onChange={(e) => setPassword(e.target.value)}
                                      placeholder="Create Password" />
                        <p className="errorMsg">{passwordError}</p>

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password"
                                      value={passwordConfirmation}
                                      name="passwordconfirm"
                                      onChange={e => setPasswordConfirmation(e.target.value)}
                                      placeholder="Confirm Password" />
                        <p className="errorMsg" > </p>
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
                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label as="legend" column sm={2}>
                                    <Uni>Home University</Uni>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check type="radio" label="Universidade " name="formHorizontalRadios" id="formHorizontalRadios1"/>
                                    <Form.Check type="radio" label="second radio" name="formHorizontalRadios" id="formHorizontalRadios2"/>
                                    <Form.Check type="radio" label="third radio" name="formHorizontalRadios" id="formHorizontalRadios3"/>
                                </Col>
                            </Form.Group>
                        </fieldset>
                    </div>
                ];
            case 2:
                return [
                    <div>
                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label as="legend" column sm={2}>
                                    <Uni>Destination University</Uni>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="Universidade "
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="second radio"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="third radio"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios3"
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>
                    </div>
                ];
            default:
                return 'Unknown stepIndex';
        }
    }


    return (
        <div className="col-12">
            <Header />
            <div className={classes.root}>

            <div>
                {activeStep === steps.length ? (
                    <div style={{textAlign:"center", marginTop: 270}}>
                        <Typography className={classes.instructions}>Registo efetuado com sucesso!</Typography>
                        <Button> <Link to={"/feed"}> Continuar</Link></Button>
                    </div>
                ) : (
                    <div>
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            <div className="d-flex">
                                <div className="col-6">
                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton}>
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
                    </div>
                )}
            </div>
        </div>
        </div>
    );
}
