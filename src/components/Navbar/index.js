import React from 'react';
import Navbar from 'react-bootstrap/Nav';
import styled from 'styled-components'
import { FaHome, FaThList, FaUsers, FaComments, FaUser } from "react-icons/fa";
import {useAuthState} from "react-firebase-hooks/auth";
import firebase from "firebase";

const Navtext = styled.p`
font-size: 13px;
color: #002337;
padding-bottom: 0;
margin-bottom: 0;
  font-weight: 600;
  `
const IconNav = styled(Navbar.Link)`
  padding: .5rem 0.5rem;
`


export default () => {
    const [user, loading, error] = useAuthState(firebase.auth());


    return (
    <Navbar justify defaultActiveKey="/feed" className="fixed-bottom bg-white">
        <Navbar.Item>
                <IconNav href="/feed">
                    <FaHome color="#002337" style={{width: '100%'}}/>
                    <br />
                    <Navtext>Feed</Navtext>
                </IconNav>
        </Navbar.Item>
        <Navbar.Item>
            <IconNav href="/categories">
                <FaThList color="#002337" style={{width: '100%'}} />
                <br />
                <Navtext>Categories</Navtext>
            </IconNav>
        </Navbar.Item>
        <Navbar.Item>
            <IconNav href="/community">
                <FaUsers color="#002337" style={{width: '100%'}} />
                <br />
                <Navtext>Community</Navtext>
            </IconNav>
        </Navbar.Item>
        <Navbar.Item>
            <IconNav href="/chat">
                <FaComments color="#002337" style={{width: '100%'}} />
                <br />
                <Navtext>Chat</Navtext>
            </IconNav>
        </Navbar.Item >
        <Navbar.Item>
            <IconNav href="/myprofile/" >
                <FaUser color="#002337" style={{width: '100%'}} />
                <br />
                <Navtext>Profile</Navtext>
            </IconNav>
        </Navbar.Item>
    </Navbar>
)}



