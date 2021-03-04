import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import {Link} from "react-router-dom";
import logoEciu from "../../images/logoeciu.png"
import FirebaseConfig from "../../scripts/FirebaseConfig";


const ButtonConfirm = styled.button`
  background-color: #002337;
  color: white;
  border-radius: 4px;
  font-weight: 600;
  border-color: transparent;`
const ButtonSignup = styled(Link)`
  font-weight: bold;
  color: #002337;`

export default function SignIn ({ setUser }) {

    //const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    /*const handleLogin = () =>  {
        console.log(props);
        props.handleLogin(email, password)
    }*/

    const handleLogin = () => {
        clearErrors()

        FirebaseConfig
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                   // setUser(user.user.uid)
                    console.log(user.user.uid)}
                    //window.location.href = "/categories"


            )
            .catch(err => {
                switch (err.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }})
        //console.log(email, password);
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }


    return (
        <div className="text-center">
            <div className="" style={{marginTop: "7rem"}}>
                <img src={logoEciu} className="w-50"  alt="logo"/>
            </div>
        <div className=""  style={{marginTop: "7rem"}}>
            <Form.Group controlId="formBasicEmail" className="mt-5">
                <Form.Control type="email"  required placeholder="E-mail" value={email} onChange={(e)=> setEmail(e.target.value)}/>
           <p className="errorMsg">{emailError}</p>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password"  required placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
            <p className="errorMsg">{passwordError}</p>
            </Form.Group>
        </div>
            <div className=""  style={{marginTop: "4rem"}}>
                     <ButtonConfirm className="p-3" onClick={handleLogin}>
                        Sign In
                    </ButtonConfirm>
                <p  style={{marginTop: "6rem"}}>Don't have an account? <ButtonSignup to={"/signup"}>Sign up!</ButtonSignup></p>

            </div>
        </div>

    )
}