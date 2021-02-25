import '../../App.css'
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import { FaEdit, FaSearch, FaChevronDown } from "react-icons/fa";
import imgUser from "../../images/user.png"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import HeaderBack from "../../components/HeaderBack"

import imgAll from "../../images/subcategories/accomodation_all.png"
import imgHotels from "../../images/subcategories/accomodation_hotels.png"

import imgRooms from "../../images/subcategories/acoomodation_rooms.png"
import imgApartments from "../../images/subcategories/accomodation_apartments.png"
import {AiOutlineLike} from "react-icons/ai";


const Title = styled.h4`
font-size: 28px;
font-weight: 800;

color: #002337;
  `

const BtnFollow = styled(Link)`
color: #F7A70A;
border: solid 1px #F7A70A;
border-radius: 2px;

text-align: center;

height: 30px;
width: 80px;
  `

const BtnCreate = styled(Link)`
background-color: #002337;
color: white;
border-radius: 2px;

font-weight: 700;
font-size: 18px;
ext-align: center;
line-height: 50px;

height: 50px;

  `
const BtnSearch = styled(Link)`
background-color: #002337;
color: white;
border-radius: 2px;

text-align: center;
line-height: 50px;

height: 50px;
  `

const Tips = styled.div`
  `
const TopTips = styled.div`
background-color: #2E4B5B;
padding-bottom: 5px;

  `
const TopTip = styled.div`
background-color: white;

& img {
height: 57px;
}

margin: 0 20px 0;
padding: 10px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


  `

const Tip = styled.div`
background-color: white;

& img {
height: 57px;
}

margin: 0 0.2rem 0 0.2rem;
padding: 10px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `
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
margin-bottom: 0;
  `
const TitleTopTips = styled.h5`
font-weight: 700;
color: white;
  `

const Subcategories = styled.div`
overflow: auto;
white-space: nowrap;

& img {
height: 60px;

padding: 10px;

}
  `

const Sub = styled.div`
text-align: center;
justify-content: center;
border-radius: 50%;
height: 70px;
width: 70px;
// border: 3px solid #F7A70A;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  `

const Label = styled.p`
font-size: 16px;
font-weight: 700;
text-align: center;
  `

const InfoAdd = styled.div`
`

const Likes = styled.p`
    display: inline-flex;
    font-size: 14px;
    color: #8B8A8A;
`

const BotaoLike = styled.div`
width: 1.5rem;
  height: 1.5rem;
`

const Date = styled.p`
  font-size: 14px;
  color: #8B8A8A;
`

export default () => {
    return (
        <div>
            <HeaderBack />
            <div className="d-flex">
                <Title className="mt-2 mb-2 mr-5">
                    ACCOMODATION
                </Title>
                <BtnFollow className="align-self-center">Follow</BtnFollow>
            </div>
            <div className="d-flex text-center">
                <BtnCreate className="col-9 mr-4">
                    <FaEdit className="mr-2"/> Create Post
                </BtnCreate>
                <BtnSearch className="col-2">
                    <FaSearch />
                </BtnSearch>
            </div>

            <Subcategories className="d-flex mt-3">
                <div className="mr-3 text-center">
                    <Sub className="justify-content-center">
                        <img src={imgAll} alt="todos"/>
                    </Sub>
                    <Label>All</Label>
                </div>
                <div className="mr-3 text-center">
                    <Sub>
                        <img src={imgHotels} alt="hotels"/>
                    </Sub>
                    <Label>Hotels</Label>
                </div>
                <div className="mr-3 text-center">
                    <Sub>
                        <img src={imgRooms}  alt="rooms"/>
                    </Sub>
                    <Label>Rooms</Label>
                </div>
                <div className="mr-3 text-center">
                    <Sub>
                        <img src={imgApartments}  alt="apartments"/>
                    </Sub>
                    <Label>Apartments</Label>
                </div>
                <div className="text-center">
                    <Sub>
                        <img src={imgApartments}  alt="apartments"/>
                    </Sub>
                    <Label>Apartments</Label>
                </div>

            </Subcategories>


            <Tips>
                <TopTips className="mb-3">
                    <TitleTopTips className="mt-0 pt-2 pl-3">TOP-TIPS</TitleTopTips>

                    <Accordion className="align-self-center col-12 pl-0 pr-0">

                    <TopTip className="d-flex row mb-3">
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

                        <Accordion.Toggle eventKey="0" style={{border:"transparent", backgroundColor:"white"}} className="col-2">
                            <FaChevronDown />
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <div>
                                <h6 className="mt-3">This was the best restaurant I've been, it was a wonderful experience, the food is wonderful, the saft is very friendly and very attentive. </h6>
                                <InfoAdd className="d-flex">
                                    <Date className="col-8 pl-0 ml-0 mb-0">
                                        04-01-2020 at 23:12
                                    </Date>
                                    <Likes className="ml-4 col-md-4 mb-0">
                                        <p>2376</p>
                                        <BotaoLike>
                                            <AiOutlineLike className={"w-100"} />
                                        </BotaoLike>

                                    </Likes>
                                </InfoAdd>
                            </div>
                        </Accordion.Collapse>
                    </TopTip>
                </Accordion>

                    <Accordion className="align-self-center col-12 pl-0 pr-0">

                        <TopTip className="d-flex row mb-3">
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

                            <Accordion.Toggle eventKey="0" style={{border:"transparent", backgroundColor:"white"}} className="col-2">
                                <FaChevronDown />
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                                <div>
                                    <h6 className="mt-3">This was the best restaurant I've been, it was a wonderful experience, the food is wonderful, the saft is very friendly and very attentive. </h6>
                                    <InfoAdd className="d-flex">
                                        <Date className="col-8 pl-0 ml-0 mb-0">
                                            04-01-2020 at 23:12
                                        </Date>
                                        <Likes className="ml-4 col-md-4 mb-0">
                                            <p>2376</p>
                                            <BotaoLike>
                                                <AiOutlineLike className={"w-100"} />
                                            </BotaoLike>

                                        </Likes>
                                    </InfoAdd>
                                </div>
                            </Accordion.Collapse>
                        </TopTip>
                    </Accordion>

                    <Accordion className="align-self-center col-12 pl-0 pr-0">

                        <TopTip className="d-flex row mb-3">
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

                            <Accordion.Toggle eventKey="0" style={{border:"transparent", backgroundColor:"white"}} className="col-2">
                                <FaChevronDown />
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                                <div>
                                    <h6 className="mt-3">This was the best restaurant I've been, it was a wonderful experience, the food is wonderful, the saft is very friendly and very attentive. </h6>
                                    <InfoAdd className="d-flex">
                                        <Date className="col-8 pl-0 ml-0 mb-0">
                                            04-01-2020 at 23:12
                                        </Date>
                                        <Likes className="ml-4 col-md-4 mb-0">
                                            <p>2376</p>
                                            <BotaoLike>
                                                <AiOutlineLike className={"w-100"} />
                                            </BotaoLike>

                                        </Likes>
                                    </InfoAdd>
                                </div>
                            </Accordion.Collapse>
                        </TopTip>
                    </Accordion>
                </TopTips>

                <Accordion className="align-self-center col-12 pl-0 pr-0">

                    <Tip className="d-flex row mb-3">
                        <div className="col-3 pl-0 mt-2">
                            <img className="rounded-circle" src={imgUser} alt="profile"/>
                        </div>
                        <div className="col-7 pl-0 mt-2">
                            <Text>
                                Best restaurant in Aveiro
                            </Text>
                            <Name>
                                Anne-Marie
                            </Name>
                        </div>

                        <Accordion.Toggle eventKey="0" style={{border: "transparent", backgroundColor: "white"}}
                                          className="col-2">
                            <FaChevronDown/>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <div>
                                <h6 className="mt-3">This was the best restaurant I've been, it was a wonderful
                                    experience, the food is wonderful, the saft is very friendly and very
                                    attentive. </h6>
                                <InfoAdd className="d-flex">
                                    <Date className="col-8 pl-0 ml-0 mb-0">
                                        04-01-2020 at 23:12
                                    </Date>
                                    <Likes className="ml-4 col-md-4 mb-0">
                                        <p>2376</p>
                                        <BotaoLike>
                                            <AiOutlineLike className={"w-100"}/>
                                        </BotaoLike>

                                    </Likes>
                                </InfoAdd>
                            </div>
                        </Accordion.Collapse>
                    </Tip>
                </Accordion>

                <Accordion className="align-self-center col-12 pl-0 pr-0">

                    <Tip className="d-flex row mb-3">
                        <div className="col-3 pl-0 mt-2">
                            <img className="rounded-circle" src={imgUser} alt="profile"/>
                        </div>
                        <div className="col-7 pl-0 mt-2">
                            <Text>
                                Best restaurant in Aveiro
                            </Text>
                            <Name>
                                Anne-Marie
                            </Name>
                        </div>

                        <Accordion.Toggle eventKey="0" style={{border: "transparent", backgroundColor: "white"}}
                                          className="col-2">
                            <FaChevronDown/>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <div>
                                <h6 className="mt-3">This was the best restaurant I've been, it was a wonderful
                                    experience, the food is wonderful, the saft is very friendly and very
                                    attentive. </h6>
                                <InfoAdd className="d-flex">
                                    <Date className="col-8 pl-0 ml-0 mb-0">
                                        04-01-2020 at 23:12
                                    </Date>
                                    <Likes className="ml-4 col-md-4 mb-0">
                                        <p>2376</p>
                                        <BotaoLike>
                                            <AiOutlineLike className={"w-100"}/>
                                        </BotaoLike>

                                    </Likes>
                                </InfoAdd>
                            </div>
                        </Accordion.Collapse>
                    </Tip>
                </Accordion>

                <Accordion className="align-self-center col-12 pl-0 pr-0">

                    <Tip className="d-flex row mb-3">
                        <div className="col-3 pl-0 mt-2">
                            <img className="rounded-circle" src={imgUser} alt="profile"/>
                        </div>
                        <div className="col-7 pl-0 mt-2">
                            <Text>
                                Best restaurant in Aveiro
                            </Text>
                            <Name>
                                Anne-Marie
                            </Name>
                        </div>

                        <Accordion.Toggle eventKey="0" style={{border: "transparent", backgroundColor: "white"}}
                                          className="col-2">
                            <FaChevronDown/>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <div>
                                <h6 className="mt-3">This was the best restaurant I've been, it was a wonderful
                                    experience, the food is wonderful, the saft is very friendly and very
                                    attentive. </h6>
                                <InfoAdd className="d-flex">
                                    <Date className="col-8 pl-0 ml-0 mb-0">
                                        04-01-2020 at 23:12
                                    </Date>
                                    <Likes className="ml-4 col-md-4 mb-0">
                                        <p>2376</p>
                                        <BotaoLike>
                                            <AiOutlineLike className={"w-100"}/>
                                        </BotaoLike>

                                    </Likes>
                                </InfoAdd>
                            </div>
                        </Accordion.Collapse>
                    </Tip>
                </Accordion>

            </Tips>
        <Navbar />
        </div>

    )

}