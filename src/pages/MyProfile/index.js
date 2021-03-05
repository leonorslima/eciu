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

const Button = styled(Link)`
background-color: #002337;
color: white;
  `
const Nome = styled.h4`
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

export default () => {
    const [userSigned, setUserSigned] = useState([]);
    const [user, loading, error] = useAuthState(firebase.auth());

    useEffect(() => {
        fetchPostUser()
            .then(userSigned => {
                setUserSigned(userSigned);
            })


    }, []);

    return (
        <div>
            <Header />
            <Title className="mt-2 mb-2">MY PROFILE</Title>

                            <div className="text-center mt-5">
                                <img className="mt-4 mb-3 rounded-circle w-50" src={imgUser}  alt="profile" />
                                <div  className={{margin: "auto"}}>
                                    <div className="row text-center">
                                        <div className={{margin: "auto"}}>
                                            <Nome className="mb-0 pb-0">Teste 12</Nome>
                                            <Info> <FaMapMarkerAlt /> From <b> Aveiro, Portugal</b></Info>
                                            <Info className="mb-5"> Buddy since 2018 </Info>
                                        </div>
                                    </div>


                                    <Button className="mt-5 p-3" to={"/editprofile"}>
                                        Edit Information
                                    </Button>
                                    <Button className="mt-5 p-3">
                                        <FaSignOutAlt />
                                    </Button>
                                </div>
                            </div>

            <Navbar />
        </div>


    )

}