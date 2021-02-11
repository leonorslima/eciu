import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import Form from "react-bootstrap/Form";

const ButtonConfirm = styled(Link)`
background-color: #002337;
color: white;
border-radius: 2px;

font-weight: 600;
  `

const ButtonCancel = styled(Link)`
border: 2px solid #002337;
border-radius: 2px;

color: #002337;
font-weight: 500;

  `

const Title = styled.h1`
  font-size: 28px;
  font-weight: 800;
  color: #002337;`

export default () => {
    return (
        <div>
            <Title className="mt-2 mb-2">EDIT PROFILE</Title>
            <div>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Edward NjnJdedef" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>E-mail:</Form.Label>
                    <Form.Control type="email" placeholder="example@ua.pt" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCity">
                    <Form.Label>City, Country:</Form.Label>
                    <Form.Control type="text" placeholder="Porvo, Finland" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Home University:</Form.Label>
                    <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                    <option value="0">University of Stavanger</option>
                    <option value="1">Travel Student</option>
                    <option value="2">Buddy</option>
                    <option value="3">Travel Student & Buddy</option>
                </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Destination University:</Form.Label>
                    <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                        <option value="0">University of Stavanger</option>
                        <option value="1">Travel Student</option>
                        <option value="2">Buddy</option>
                        <option value="3">Travel Student & Buddy</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Profile:</Form.Label>
                    <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                        <option value="0">Traveler Student</option>
                        <option value="1">Buddy</option>
                        <option value="2">Travel Student & Buddy</option>
                    </Form.Control>
                </Form.Group>

            </div>
            <div className="mb-5 text-center">
            <ButtonCancel className="mt-5 mr-4 p-2" to={"/"}>
                Cancel
            </ButtonCancel>

            <ButtonConfirm className="mt-5 ml-4 p-2" to={"/"}>
                Publish
            </ButtonConfirm>
            </div>
        </div>
    )
}