import React from 'react';
import styled from 'styled-components'
import imgUser from "../../images/user.png";
import SendIcon from '@material-ui/icons/Send';
import Navbar from "../../components/Navbar";
import {Link} from "react-router-dom";
import Form from "react-bootstrap/Form";



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

  align-items: center;
  
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
 border-radius: 2px;
  
`

const ChatUser = styled.div`
  background-color:#DBDBDB;
  padding: 5px;
  margin: 0px 70px 0.5px 70px;
  box-sizing: border-box;
  border-radius: 5px;


`
const FotoRight = styled.div`
  & img {
    height: 40px;
    right: 0;
    float: right;
    object-fit: cover;
    margin-right: -275px;
    margin-top: -60px;

  } 

  `



const ChatOther = styled.div`
  background-color: #DBDBDB;
  border-radius: 5px;
  margin: 0px 100px 0.5px 45px;
  box-sizing: border-box;
  padding: 5px;
  

`

const FotoLeft = styled.div`
    & img {
    height: 40px;
    right: 0;
    float: right;
    object-fit: cover;
      margin-top: -60px;
      

}

`

const Badge = styled.div`
 
  
`
const ChatArea = styled.div`
    background: white;
 overflow-y: auto;
  
`
const BtnSubmit = styled(Link)`
 position: absolute;
  margin-left: 260px;
  
`
const MessageForm = styled.form`
  display: flex;
  background-color: #DBDBDB;
`

  const InputConteiner = styled.div`
    flex:1;
    margin:1px;
  `
    
  const ButtonContainer = styled.div`
      flex: 0 0 6em;
      margin: 1px 1px 1px 0;
  `

  const Input = styled.input`
background: white;
  border-radius: 3px;
  border: 1px solid #DBDBDB;
  box-sizing: border-box;
  font-size: inherit;
  height: 100%;
  outline: none;
  width: 100%;
  padding: 0 0 0 4px;
  `

  const Button = styled.button`
        background: white;
        border-radius: 3px;
        border: 1px solid #DBDBDB;
        box-sizing: border-box;
        font-size: inherit;
        height: 100%;
        outline: none;
        width: 100%;
  `


const Me = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #8B8A8A;
  margin-right: -228px;
  margin-bottom: 0px;
 
  
`
const User = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #8B8A8A;
  margin-left: -20px;
  margin-top: -25px;
`

const textarea = styled.input``






export default () => {
    return (
        <div>

            <Other className="d-flex mb-3">
                <div className="col-3 pl-0 ml-3">
                    <img className="rounded-circle img-fluid" src={imgUser}  alt="profile"/>
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
                <div className="align-text-top text-right col-2">
                    <Me >
                        You
                    </Me>
                </div>
                < ChatUser className="d-flex mb-4">
                <div className="col-10 text-fluid">
                    <Text >
                        Hi Joana!
                        I’m Edward, I need a little help from you.
                        Can I count on you?
                    </Text>
                </div>
                </ChatUser>
                <FotoRight className="col-2">
                    <img className="rounded-circle" src={imgUser}  alt="profile"/>
                </FotoRight>

            <ChatOther className="d-flex mb-4">
                <div className="align-text-top text-right col-2">
                    <User >
                        Joana
                    </User>
                </div>
                <div className="col-10 pl-0">
                    <Text>
                        Hello Edward!
                        What do you need?
                    </Text>

                </div>
                </ChatOther>
                <FotoLeft className ="col-2 pl-0">
                    <img className="rounded-circle img-fluid" src={imgUser}  alt="profile"/>
                </FotoLeft>


                <div className="align-text-top text-right col-2">
                    <Me >
                        You
                    </Me>
                </div>
                < ChatUser className="d-flex mb-4">
                    <div className="col-10 text-fluid">
                        <Text >
                          I saw your comment about Convivio and I'd like you to tell me more about it
                        </Text>

                    </div>
                </ChatUser>
                <FotoRight className="col-2">
                    <img className="rounded-circle" src={imgUser}  alt="profile"/>
                </FotoRight>

                <ChatOther className="d-flex mb-4">
                    <div className="align-text-top text-right col-2">
                        <User >
                            Joana
                        </User>
                    </div>
                    <div className="col-10 pl-0">
                        <Text>
                            The place is nice, so is the food.
                        </Text>

                    </div>
                </ChatOther>
                <FotoLeft className ="col-2 pl-0">
                    <img className="rounded-circle img-fluid" src={imgUser}  alt="profile"/>
                </FotoLeft>

                <div className="align-text-top text-right col-2">
                    <Me >
                        You
                    </Me>
                </div>
                < ChatUser className="d-flex mb-4">
                    <div className="col-10 text-fluid">
                        <Text >
                           Thanks!
                        </Text>

                    </div>
                </ChatUser>
                <FotoRight className="col-2">
                    <img className="rounded-circle" src={imgUser}  alt="profile"/>
                </FotoRight>

            </ChatArea>

                    <MessageForm  className="MessageForm">
<InputConteiner className="input-container">
                        <Input type="text" rows={1} placeholder="Enter your message..."/>
        </InputConteiner>
                           <ButtonContainer className="button-container">
                               <Button type="submit">
                                <SendIcon />
                               </Button>
                           </ButtonContainer>
                    </MessageForm>

            </Badge>
            <Navbar />
        </div>
    )

}
