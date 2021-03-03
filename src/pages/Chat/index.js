import React from 'react';
import styled from 'styled-components'
import imgUser from "../../images/user.png";
import Navbar from "../../components/Navbar";
import HeaderBack from "../../components/HeaderBack";



const Title = styled.h1`
  font-size: 28px;
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

  
  `


const Data = styled.p`
  font-size: 10px;
  font-weight: 800;
  color: #8B8A8A;`



export default () => {
    return (
       <div>
           <HeaderBack />
           <div>
               <Title className="mb-5 mt-4">PRIVATE CHAT</Title>

           </div>


    <Tip className="d-flex mb-3 mt-4">
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
