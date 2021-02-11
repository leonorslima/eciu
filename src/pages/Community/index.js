import React from 'react';
import styled from 'styled-components'
import imgUser from "../../images/user.png"


const Title = styled.h4`

font-size: 28px;
font-weight: 800;
color: #002337;
  `

const Name = styled.p`
font-size: 16px;
font-weight: 700;
color: #002337;
margin-bottom: 0;
  `

const Uni = styled.p`
font-size: 14px;
font-weight: 500;
color: #002337;

  `

const Description = styled.p`
font-weight: 400;
font-size: 16px;

  `

export default () => {
    return (
        <div className="mt-2 mb-2">
            <Title>COMMUNITY</Title>
            <Description>Here you can find a list of buddies that are available to help you!</Description>

            <div className="container mt-4">

                <div className="row text-center">
                    <div className="col-6">
                        <img className="rounded-circle w-100" src={imgUser}/>
                        <Name>Joana Sousa</Name>
                        <Uni>University of Aveiro</Uni>
                    </div>
                    <div className="col-6">
                        <img className="rounded-circle w-100" src={imgUser}/>
                        <Name>Joana Sousa</Name>
                        <Uni>University of Aveiro</Uni>

                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-6">
                        <img className="rounded-circle w-100" src={imgUser}/>
                        <Name>Joana Sousa</Name>
                        <Uni>University of Aveiro</Uni>
                    </div>
                    <div className="col-6">
                        <img className="rounded-circle w-100" src={imgUser}/>
                        <Name>Joana Sousa</Name>
                        <Uni>University of Aveiro</Uni>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-6">
                        <img className="rounded-circle w-100" src={imgUser}/>
                        <Name>Joana Sousa</Name>
                        <Uni>University of Aveiro</Uni>
                    </div>
                    <div className="col-6">
                        <img className="rounded-circle w-100" src={imgUser}/>
                        <Name>Joana Sousa</Name>
                        <Uni>University of Aveiro</Uni>
                    </div>
                </div>


            </div>
        </div>
    )

}