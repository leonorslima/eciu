import React from 'react';
import styled from 'styled-components'
import imgUser from "../../images/user.png";
import Navbar from "../../components/Navbar";
import HeaderBack from "../../components/HeaderBack";
import {Link} from "react-router-dom";

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
  text-decoration: none !important;

`
const Name = styled.p`
  font-weight: 400;
  margin-bottom: 0;
  text-decoration: none !important;
`
const Tip = styled(Link)`
  background-color: white;
  text-decoration: none !important;


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


    <Tip className="d-flex mb-3 mt-4" to={"/privatechat"}>
        <div className="col-3 pl-0">
            <img className="rounded-circle" src={imgUser}  alt="profile"/>
        </div>
        <div className="col-7 pl-0">
            <Name>
                Joana Rodrigues
            </Name>
            <Text>
                Convívio has a really nice vibe!
            </Text>
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
            <Name>
                Leonor Lima
            </Name>
            <Text>
                Yes! I can't recommend Saladas+ enough ...
            </Text>
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
                   <Name>
                       Sara Vilarinho
                   </Name>
                   <Text>
                       If you go to Piano Café at night be careful...
                   </Text>
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
                   <Name>
                       Daniel Nunes
                   </Name>
                   <Name>
                       The university is really ...
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
                   <Name>
                       Mariana Bastos
                   </Name>
                   <Name>
                       Have you checked out...
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
