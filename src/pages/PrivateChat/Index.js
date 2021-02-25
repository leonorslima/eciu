import React from 'react';
import styled from 'styled-components'
import imgUser from "../../images/user.png";
import Navbar from "../../components/Navbar";




const Perfil = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: #002337;`

const Text = styled.p`
  font-weight: 700;
  margin-bottom: 0;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  
  `

const Name = styled.p`
  font-weight: 400;
  margin-bottom: 0;`


const Tip = styled.div`
  background-color: white;


  & img {
    height: 57px;
  }

  padding: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  `


const Data = styled.p`
  font-size: 10px;
  font-weight: 800;
  color: #8B8A8A;`



export default () => {
    return (
        <div>

            <div>

                <Perfil className="d-flex mb-3">
                    <div className="col-3 pl-0">
                        <img className="rounded-circle" src={imgUser}  alt="profile"/>
                    </div>
                    <div className="col-7 pl-0">
                        <Text>
                            Joana Sousa
                        </Text>
                        <Name>
                            Aveiro University
                            INSA
                        </Name>
                    </div>
                    <div className="align-self-center col-2 pr-0">
                        <Data>
                            01/02
                        </Data>
                    </div>
                </Perfil>

            </div>


            <Tip className="d-flex mb-3">
                <div className="col-3 pl-0">
                    <img className="rounded-circle" src={imgUser}  alt="profile"/>
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
                    <Data>
                        01/02
                    </Data>
                </div>
            </Tip>
            <Tip className="d-flex mb-3">
                <div className="col-3 pl-0">
                    <img className="rounded-circle" src={imgUser}  alt="profile"/>
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
                    <Data>
                        01/02
                    </Data>
                </div>
            </Tip>
            <Tip className="d-flex mb-3">
                <div className="col-3 pl-0">
                    <img className="rounded-circle" src={imgUser}  alt="profile"/>
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
                    <Data>
                        01/02
                    </Data>
                </div>
            </Tip>
            <Tip className="d-flex mb-3">
                <div className="col-3 pl-0">
                    <img className="rounded-circle" src={imgUser}  alt="profile"/>
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
                    <Data>
                        01/02
                    </Data>
                </div>
            </Tip>
            <Tip className="d-flex mb-3">
                <div className="col-3 pl-0">
                    <img className="rounded-circle" src={imgUser}  alt="profile"/>
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
                    <Data>
                        01/02
                    </Data>
                </div>
            </Tip>
            <Tip className="d-flex mb-3">
                <div className="col-3 pl-0">
                    <img className="rounded-circle" src={imgUser}  alt="profile"/>
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
                    <Data>
                        01/02
                    </Data>
                </div>
            </Tip>
            <Navbar />
        </div>
    )

}
