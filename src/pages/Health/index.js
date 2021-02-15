import '../../App.css'
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import { FaEdit, FaSearch, FaChevronDown } from "react-icons/fa";
import imgUser from "../../images/user.png"
import imgVegan from "../../images/subcategories/restaurants_vegan.png"
import imgAll from "../../images/subcategories/restaurants_all.png"
import imgFastFood from "../../images/subcategories/restaurants_fastfood.png"
import imgChinese from "../../images/subcategories/restaurants_chinese.png"


const Title = styled.h4`
font-size: 28px;
font-weight: 800;

color: #002337;
  `

const BtnFollow = styled(Link)`
color: #739EB6;
border: solid 1px #739EB6;
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
background-color: #739EB6;
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

export default () => {
    return (
        <div>
            <div className="d-flex">
                <Title className="mt-2 mb-2 mr-5">
                    HEALTH
                </Title>
                <BtnFollow className="align-self-center">Follow</BtnFollow>
            </div>

            <div className="d-flex text-center mt-4">
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
                    <img src={imgAll}  alt="all"/>
                </Sub>
                    <Label>All</Label>
                </div>
                <div className="mr-3 text-center">
                    <Sub>
                        <img src={imgVegan}  alt="hospital"/>
                    </Sub>
                    <Label>Hospitals</Label>
                </div>
                <div className="mr-3 text-center">
                    <Sub>
                        <img src={imgFastFood}  alt="covid"/>
                    </Sub>
                    <Label>Covid-19</Label>
                </div>
                <div className="mr-3 text-center">
                    <Sub>
                        <img src={imgChinese}  alt="pharmacy"/>
                    </Sub>
                    <Label>Pharmacy</Label>
                </div>
                <div className="text-center">
                <Sub>
                    <img src={imgChinese}  alt="doctor"/>
                </Sub>
                <Label>Doctor</Label>
            </div>

            </Subcategories>


            <Tips>
                <TopTips className="mb-3">
                    <TitleTopTips className="mt-0 pt-2 pl-3">TOP-TIPS</TitleTopTips>
                    <TopTip className="d-flex row mb-3">
                        <div className="col-3 pl-0">
                            <img className="rounded-circle" src={imgUser}  alt="profile"/>
                        </div>
                        <div className="col-7 pl-0">
                            <Text>
                                Special services are open 24h...
                            </Text>
                            <Name>
                                Shen Smith
                            </Name>
                        </div>

                        <Accordion className="align-self-center col-2 pr-0">
                            <Accordion.Toggle eventKey="0">
                                <FaChevronDown />
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                            <h5>jdijijiejd</h5>
                            </Accordion.Collapse>
                        </Accordion>
                    </TopTip>

                    <TopTip className="d-flex row mb-3">
                        <div className="col-3 pl-0">
                            <img className="rounded-circle" src={imgUser}  alt="profile"/>
                        </div>
                        <div className="col-7 pl-0">
                            <Text>
                                Special services are open 24h...
                            </Text>
                            <Name>
                                Shen Smith
                            </Name>
                        </div>
                        <div className="align-self-center col-2 pr-0">
                            <FaChevronDown />
                        </div>
                    </TopTip>

                    <TopTip className="d-flex row mb-3">
                        <div className="col-3 pl-0">
                            <img className="rounded-circle" src={imgUser}  alt="profile"/>
                        </div>
                        <div className="col-7 pl-0">
                            <Text>
                                Special services are open 24h...
                            </Text>
                            <Name>
                                Shen Smith
                            </Name>
                        </div>
                        <div className="align-self-center col-2 pr-0">
                            <FaChevronDown />
                        </div>
                    </TopTip>
                </TopTips>
                <Tip className="d-flex mb-3">
                    <div className="col-3 pl-0">
                        <img className="rounded-circle" src={imgUser}  alt="profile"/>
                    </div>
                    <div className="col-7 pl-0">
                        <Text>
                            Special services are open 24h...
                        </Text>
                        <Name>
                            Shen Smith
                        </Name>
                    </div>
                    <div className="align-self-center col-2 pr-0">
                        <FaChevronDown />
                    </div>
                </Tip>

                <Tip className="d-flex mb-3">
                    <div className="col-3 pl-0">
                        <img className="rounded-circle" src={imgUser} alt="profile" />
                    </div>
                    <div className="col-7 pl-0">
                        <Text>
                            Special services are open 24h...
                        </Text>
                        <Name>
                            Shen Smith
                        </Name>
                    </div>
                    <div className="align-self-center col-2 pr-0">
                        <FaChevronDown />
                    </div>
                </Tip>

                <Tip className="d-flex mb-3">
                    <div className="col-3 pl-0">
                        <img className="rounded-circle" src={imgUser}  alt="profile" />
                    </div>
                    <div className="col-7 pl-0">
                        <Text>
                            Special services are open 24h...
                        </Text>
                        <Name>
                            Shen Smith
                        </Name>
                    </div>
                    <div className="align-self-center col-2 pr-0">
                        <FaChevronDown />
                    </div>
                </Tip>

                <Tip className="d-flex mb-3">
                    <div className="col-3 pl-0">
                        <img className="rounded-circle" src={imgUser}  alt="profile"/>
                    </div>
                    <div className="col-7 pl-0">
                        <Text>
                            Special services are open 24h...
                        </Text>
                        <Name>
                            Shen Smith
                        </Name>
                    </div>
                    <div className="align-self-center col-2 pr-0">
                        <FaChevronDown />
                    </div>
                </Tip>

            </Tips>

        </div>

    )

}