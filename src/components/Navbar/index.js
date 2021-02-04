import React from 'react';
import Navbar from 'react-bootstrap/Nav';
import styled from 'styled-components'
import { FaHome, FaThList, FaUsers, FaComments, FaUser } from "react-icons/fa";

const Navtext = styled.p`

font-size: 11px;
color: #002337;
padding-bottom: 0;
margin-bottom: 0;

  `




export default () => {

    return (
    <Navbar justify defaultActiveKey="/feed" className="fixed-bottom bg-white">
        <Navbar.Item>
                <Navbar.Link href="/feed">
                    <FaHome color="#002337"/>
                    <br />
                    <Navtext>Feed</Navtext>
                </Navbar.Link>
        </Navbar.Item>
        <Navbar.Item>
            <Navbar.Link href="/categories">
                <FaThList color="#002337" />
                <br />
                <Navtext>Categories</Navtext>
            </Navbar.Link>
        </Navbar.Item>
        <Navbar.Item>
            <Navbar.Link href="/community">
                <FaUsers color="#002337" />
                <br />
                <Navtext>Community</Navtext>
            </Navbar.Link>
        </Navbar.Item>
        <Navbar.Item>
            <Navbar.Link href="/chat">
                <FaComments  color="#002337" />
                <br />
                <Navtext>Chat</Navtext>
            </Navbar.Link>
        </Navbar.Item >
        <Navbar.Item>
            <Navbar.Link href="/profile">
                <FaUser  color="#002337" />
                <br />
                <Navtext>Profile</Navtext>
            </Navbar.Link>
        </Navbar.Item>
    </Navbar>
)}



