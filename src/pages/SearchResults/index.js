import React from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import imgUser from "../../images/user.png";
import {FaChevronDown} from "react-icons/fa";

const Title = styled.h4`
font-size: 28px;
font-weight: 800;

color: #002337;
  `
const Subtitle = styled.p`
font-size: 20px;
font-weight: 700;
text-align: left;

color: #002337;

  `
const Tip = styled.div`
background-color: white;

& img {
height: 57px;
}

padding: 10px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `

const Text = styled.p`
font-weight: 600;
margin-bottom: 0;
font-size: 16px;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
  `

const Name = styled.p`
font-weight: 400;
margin-bottom: 0;
  `


export default () => {
    return (
        <div>
            <Title className="mt-2 mb-2">SEARCH RESULTS</Title>
            <div>
                <Form.Group controlId="formBasicSearch">
                    <Form.Control type="text" placeholder="transport downtown" />
                </Form.Group>
            </div>
            <div>
                <Subtitle>
                    Search for Transports
                </Subtitle>
            </div>
            <Tip className="d-flex mb-3">
                <div className="col-3 pl-0">
                    <img className="rounded-circle" src={imgUser} />
                </div>
                <div className="col-7 pl-0">
                    <Text>
                        Best restaurant in Aveiro
                    </Text>
                    <Name>
                        Anne-Marie
                    </Name>
                </div>
                <div className="align-self-center col-2 pr-0">
                    <FaChevronDown />
                </div>
            </Tip>

            <Tip className="d-flex mb-3">
                <div className="col-3 pl-0">
                    <img className="rounded-circle" src={imgUser} />
                </div>
                <div className="col-7 pl-0">
                    <Text>
                        Best restaurant in Aveiro
                    </Text>
                    <Name>
                        Anne-Marie
                    </Name>
                </div>
                <div className="align-self-center col-2 pr-0">
                    <FaChevronDown />
                </div>
            </Tip>

        </div>

    )
}