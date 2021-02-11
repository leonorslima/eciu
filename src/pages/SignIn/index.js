import React from 'react';
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import {Link} from "react-router-dom";
import logoEciu from "../../images/logoeciu.png"

const ButtonConfirm = styled(Link)`
background-color: #002337;
color: white;
border-radius: 2px;

font-weight: 600;
  `

export default () => {
    return (
        <div className="text-center">
            <div>
                <img src={logoEciu} className="w-50"/>
            </div>
        <div>
            <Form.Group controlId="formBasicEmail" className="mt-5">
                <Form.Control type="text" placeholder="E-mail" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        </div>
            <div className="mt-5">
                <ButtonConfirm className="p-3" to={"/feed"}>
                    Sign In
                </ButtonConfirm>
            </div>
        </div>

    )
}

