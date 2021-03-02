import React from 'react';
import styled from 'styled-components'
import imgUser from "../../images/user.png";
import SendIcon from '@material-ui/icons/Send';
import Navbar from "../../components/Navbar";
import {Link} from "react-router-dom";



const UniO = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #002337;`

const UniD = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #002337;`

const Other = styled.div`
  background-color: white;
 display-flex: flex;
  align-items: center;
  padding: 2px;
  
  
  border-bottom: 0.5px solid #8B8A8A;

  & img {
    height: 57px;
    right: 0;
    object-fit: cover;
  }

  padding: 10px;
 

`

const Text = styled.span`
  font-weight: 500;
  margin-bottom: 0;
  font-size: 16px;
  overflow-y: auto;
  color: black;
  

`




const ChatUser = styled.div`
  background-color:#DBDBDB;
  padding: 2px;
  border-radius: 15px;
  margin: 0px 0px 0px 150px;
  



  padding: 10px;
 

`
const FotoRight = styled.div`
  & img {
    height: 40px;
    right: 0;
    float: right;

    object-fit: cover;
    margin-left: 60px;



  } 

  `



const ChatOther = styled.div`
  background-color: #DBDBDB;
  border-radius: 15px;
  margin: 0px 150px 0px 0px;
  

`

const FotoLeft = styled.div`
    & img {
    height: 40px;
    right: 0;
    float: right;

    object-fit: cover;
    margin-left: 60px;



}

`

const Badge = styled.div`
 
  
`
const ChatArea = styled.div`
    background: white;
 overflow-y: auto;
  
 
  
`
const BtnSubmit = styled(Link)`
 
  
`
const InputArea = styled.div`
  background-color: white;
  color: black;

 
  
`
const Me = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #8B8A8A;
  float: left;
  
`
const Mensagem = styled.div`
  border-radius: 2px;
  border: #DBDBDB;
  color : black;
`



export default () => {
    return (
        <div>

            <Other className="d-flex mb-3">
                <div className="col-3 pl-0 ml-3">
                    <img className="rounded-circle" src={imgUser}  alt="profile"/>
                </div>
                <div className="col-8 pl-0">
                    <Text>
                      Joana Sousa
                    </Text>
                    <UniO className="py-0">
                        Aveiro University
                    </UniO>
                    <UniD className="py-0">
                       INSA
                    </UniD>
                </div>

            </Other>
            <Badge>
            <ChatArea>
            < ChatUser className="d-flex mb-3">
                <div className="align-text-top col-2">
                    <Me >
                        You
                    </Me>
                </div>
                <div className="col-8 text-fluid">

                    <Text>
                        Hi Joana!
                        I’m Edward, I need a little help from you.
                        Can I count on you?
                    </Text>

                </div>
                <FotoRight className="col-2">
                    <img className="rounded-circle" src={imgUser}  alt="profile"/>
                </FotoRight>
                <div className="col-8 text-fluid">

                    <Text>
                        Hi Joana!
                        I’m Edward, I need a little help from you.
                        Can I count on you?
                    </Text>

                </div>

            </ChatUser>
            <ChatOther className="d-flex mb-3">
                <FotoLeft className ="col-2 pl-0">
                    <img className="rounded-circle" src={imgUser}  alt="profile"/>
                </FotoLeft>
                <div className="col-8 pl-0">
                    <Text>
                        Hello Edward!
                        What do you need?
                    </Text>

                </div>
                <div className="align-self-top col-2 pr-0">
                    <Me >
                        Joana
                    </Me>
                </div>
            </ChatOther>
            <ChatUser className="d-flex mb-3">
                <div className="align-self-top col-2 pr-0">
                    <Me >
                        You
                    </Me>
                </div>

                <div className="col-8 pl-0">
                    <Text>
                        I saw your comment about Convivio and I’d like you to tell me more about it...
                    </Text>

                </div>
                <FotoRight className="col-2 pl-0">
                    <img className="rounded-circle" src={imgUser}  alt="profile"/>
                </FotoRight>
            </ChatUser>
            <ChatOther className="d-flex mb-3">
                <FotoLeft className="col-2 pl-0">
                    <img className="rounded-circle" src={imgUser}  alt="profile"/>
                </FotoLeft>
                <div className="col-8 pl-0">
                    <Text>
                        The place is nice, so is the food.                    </Text>

                </div>
                <div className="align-self-center col-2 pr-0">
                    <Me >
                        Joana
                    </Me>
                </div>
            </ChatOther>
            <ChatUser className="d-flex mb-3">
                <div className="align-self-center col-2 pr-0">
                    <Me >
                        You
                    </Me>
                </div>
                <div className="col-8 pl-0">
                    <Text>
                        Thank you!
                    </Text>

                </div>
                <FotoRight className="col-2 pl-0">
                    <img className="rounded-circle" src={imgUser}  alt="profile"/>
                </FotoRight>

            </ChatUser>
            </ChatArea>
                <InputArea>

                    <Mensagem> texto para as mensagens </Mensagem>
                   <BtnSubmit className="col-2" to ={""}>
                       <SendIcon />
                   </BtnSubmit>
                </InputArea>
            </Badge>
            <Navbar />
        </div>
    )

}
