import React from 'react';
import styled from 'styled-components'
import imgUser from "../../images/user.png"
import { FaMapMarkerAlt, FaEdit } from "react-icons/fa";
import {Link} from "react-router-dom";


const Button = styled(Link)`
background-color: #002337;
color: white;
  `

const Name = styled.h4`
font-weight: 700;
font-size: 22px;
  `
const Info = styled.p`
font-weight: 400;
font-size: 16px;
  `

const Title = styled.h1`
  font-size: 28px;
  font-weight: 800;
  color: #002337;`


export default () => {
    return (
        <div>
            <Title>PROFILE</Title>
            <div className="text-center mt-5">
                <img className="mt-4 mb-3 rounded-circle w-50" src={imgUser} />
                <div>
                    <Name className="mb-0 pb-0">Joana Sousa</Name>
                    <Info> <FaMapMarkerAlt /> From <b> Aveiro, Portugal</b></Info>
                    <Info className="mb-5"> Buddy since 2018 </Info>
                    <Button className="mt-5 p-3" to={"/"}>
                        <FaEdit /> Edit Information
                    </Button>
                </div>
            </div>
        </div>


    )

}