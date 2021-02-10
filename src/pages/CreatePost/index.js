import React from 'react';
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import {Link} from "react-router-dom";

const ButtonConfirm = styled(Link)`
background-color: #002337;
color: white;
border-radius: 2px;
  `

const ButtonCancel = styled(Link)`
border: 2px solid #002337;
border-radius: 2px;

color: #002337;
  `

const Title = styled.h4`

font-size: 28px;
font-weight: 800;
color: #002337;
  `

export default () => {
    return (
        <div>
            <Title className="mt-2">CREATE POST</Title>
            <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                <option value="0">Choose the category</option>
                <option value="1">Restaurants</option>
                <option value="2">Accomodation</option>
                <option value="3">Transports</option>
                <option value="4">Jobs</option>
                <option value="5">Leisure</option>
                <option value="6">Health</option>
            </Form.Control>

            <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                <option value="0">Choose the subcategory</option>
                <option value="1">Restaurants</option>
                <option value="2">Accomodation</option>
                <option value="3">Transports</option>
                <option value="4">Jobs</option>
                <option value="5">Leisure</option>
                <option value="6">Health</option>
            </Form.Control>

            <Form.Group controlId="formBasicTitle" className="mt-5">
                <Form.Control type="text" placeholder="Post Title" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} placeholder="Write your post here"/>
            </Form.Group>

            <Form.Group>
                <Form.File id="exampleFormControlFile1" label="" />
            </Form.Group>

            <div className="d-flex justify-content-center">
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