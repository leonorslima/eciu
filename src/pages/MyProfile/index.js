import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import imgUser from "../../images/user.png"
import { FaMapMarkerAlt, FaEdit, FaSignOutAlt } from "react-icons/fa";
import {Link} from "react-router-dom";
import Navbar from "../../components/Navbar"
import Header from "../../components/Header"
import {createUser, fetchPostUser} from "../../FetchAPI";
import {useAuthState} from "react-firebase-hooks/auth";
import firebase from "firebase";
import {SemipolarLoading} from "react-loadingg";
import logoEciu from "../../images/logoeciu.png"
import logoUa from "../../images/logoua.png";

const LogEciu = styled.img`
height: 46px;
  `

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
const Loading = styled.p`
  margin-left: 2rem;
`

const BtnSO = styled(Link)`
color: #002337;
border: 1px solid #002337;
border-radius: 3px;
`

const Logout = styled.div`
text-align: end;
`

export default () => {
    const [isLoading, setisLoading] = useState(false);
    const [userSigned,setUserSigned] = useState([]);
    const [user, loading, error] = useAuthState(firebase.auth());

    useEffect(() => {
        setisLoading(true)
        fetchPostUser()
            .then(userSigned => {
                setisLoading(false)
                setUserSigned(userSigned);
            })
    }, []);

    return (
        <div>
            <div className="container mt-3">
                <div className="row align-items-center">
                    <div className="col-4">
                    </div>
                    <div className="col-4">
                        <LogEciu src={logoEciu}  alt="logoeciu"/>
                    </div>
                    <Logout className="col-4">
                        <BtnSO className="p-2">
                            <FaSignOutAlt />
                        </BtnSO>
                    </Logout>
                </div>
            </div>

            <Title className="mt-2 mb-2">MY PROFILE</Title>
            <div className="text-center mt-5">
                <img className="mt-4 mb-3 rounded-circle w-50" src={imgUser}  alt="profile" />
                <div>
                        <div className="row text-center">
                          {/*  {userSigned.map(
                                (userSigne) => {
                                    if(userSigne.userid === user.uid){
                                        console.log(userSigne.userid)
                                        return (*/}
                                            <div className="mx-auto">
                                                <Name className="mb-0 pb-0">Edward</Name>
                                                <Info> <FaMapMarkerAlt /> From <b> Finland</b></Info>
                                                <Info className="mb-5"> Buddy since 2018 </Info>
                                            </div>

                        </div>

                    <Button className="mt-5 p-3" to={"/editprofile"}>
                        Edit Information
                    </Button>

                </div>
            </div>
            <Navbar />
        </div>


    )

}