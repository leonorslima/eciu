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
import {createUser, fetchUni, fetchProfile} from '../../FetchAPI'

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
    const [profile, setProfile] = useState([]);
    const [profileid, setProfileid] = useState('');
    const [homeuniversityid, setHomeuniversityid] = useState('');
    const [destinyuniversityid, setDestinyuniversityid] = useState('');
    const [universities, setUniversities] = useState([]);
    const [profilepic, setProfilepic] = useState('https://i.imgur.com/lkNJhjo.png');


    const handleSignUp = (name, profileid, homeuniversityid, destinyuniversityid) =>{
        clearErrors();
        if (password === passwordConfirmation){
            FirebaseConfig
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(({user}) =>
                    createUser(user.uid, name, profileid, homeuniversityid, destinyuniversityid, profilepic),
                    ok()

                )
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
        }else{
            setPasswordConfirmationError("Your passwords are different!");
            console.log(passwordConfirmationError);
        }


    }

    const ok = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)

    }

    const handleNext = () => {
        if (activeStep === 2){
            if(passwordConfirmation === password && password !== '' && passwordConfirmation !==''){
                handleSignUp(name, profileid, homeuniversityid, destinyuniversityid)
                console.log(steps.length);
            }else {
                setActiveStep(0);
                setPasswordConfirmationError("Please fill out all fields!");
            }
        }else{
            setActiveStep((prevActiveStep) => prevActiveStep + 1)
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    /*

    const authListener =() =>{
        FirebaseConfig.auth().onAuthStateChanged((user)=>{
            if(user){
                setUser(user);
            }else {
                setUser('');
            }})}
    useEffect(()=>{
        authListener();
    }, []);
*/

    useEffect(() => {
        fetchUni()
            .then(universities => {
                    setUniversities(universities);
                }
            );
        fetchProfile()
            .then(profile => {
                setProfile(profile)
            })

    }, []);

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

                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Control type="password"
                                      value={passwordConfirmation}
                                      name="passwordconfirm"
                                      onChange={e => setPasswordConfirmation(e.target.value)}
                                      placeholder="Confirm Password" />
                        <p className="errorMsg">{passwordConfirmationError}</p>
                    </Form.Group>


                    <Form.Group className="my-1 mr-sm-2" id="inlineform" custom >
                        <Form.Label as="legend">
                            <Uni>Profile</Uni>
                        </Form.Label>
                        <Col sm={10}>
                            {profile.map(
                                (Pro)=> {
                                    return(
                                        <Form.Check type="radio" label={Pro.name}  onChange={() => setProfileid(Pro.id)} name="formHorizontalRadios" id="formHorizontalRadios1"
                                        style={{width: "18px", height: "18px"}}
                                        />
                                    )})}
                        </Col>
                    </Form.Group>

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
                                    {universities.map(
                                        (Uni)=> {
                                                return(
                                                    <Form.Check type="radio" label={Uni.name} onChange={() => setHomeuniversityid(Uni.id)} name="formHorizontalRadios" id="formHorizontalRadios1"/>
                                                )})}
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
                                    {universities.map(
                                        (Uni)=> {
                                            return(
                                                <Form.Check type="radio" label={Uni.name} onChange={() => setDestinyuniversityid(Uni.id)} name="formHorizontalRadios" id="formHorizontalRadios1"/>
                                            )
                                        }
                                    )
                                    }
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
                        <Button> <Link to={"/categories"}> Continuar</Link></Button>
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
