import '../../App.css'
import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import { FaEdit, FaSearch, FaChevronDown } from "react-icons/fa";
import imgUser from "../../images/user.png"


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
background-color: #F7A70A;
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


export default () => {
    return (
        <div>
            <div className="d-flex">
                <Title className="mt-2 mb-2 mr-5">
                    RESTAURANTS
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
            <Tips>
                <TopTips className="mb-3">
                    <TitleTopTips className="mt-0 pt-2 pl-3">TOP-TIPS</TitleTopTips>
                    <TopTip className="d-flex row mb-3">
                        <div className="col-3 pl-0">
                            <img className="rounded-circle" src={imgUser} />
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
                            <FaChevronDown />
                        </div>
                    </TopTip>

                    <TopTip className="d-flex row mb-3">
                        <div className="col-3 pl-0">
                            <img className="rounded-circle" src={imgUser} />
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
                            <FaChevronDown />
                        </div>
                    </TopTip>

                    <TopTip className="d-flex row mb-3">
                        <div className="col-3 pl-0">
                            <img className="rounded-circle" src={imgUser} />
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
                            <FaChevronDown />
                        </div>
                    </TopTip>
                </TopTips>
                <Tip className="d-flex mb-3">
                    <div className="col-3 pl-0">
                        <img className="rounded-circle" src={imgUser} />
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
                        <FaChevronDown />
                    </div>
                </Tip>

                <Tip className="d-flex mb-3">
                    <div className="col-3 pl-0">
                        <img className="rounded-circle" src={imgUser} />
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
                        <FaChevronDown />
                    </div>
                </Tip>

                <Tip className="d-flex mb-3">
                    <div className="col-3 pl-0">
                        <img className="rounded-circle" src={imgUser} />
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
                        <FaChevronDown />
                    </div>
                </Tip>

                <Tip className="d-flex mb-3">
                    <div className="col-3 pl-0">
                        <img className="rounded-circle" src={imgUser} />
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
                        <FaChevronDown />
                    </div>
                </Tip>

            </Tips>

        </div>

    )

}