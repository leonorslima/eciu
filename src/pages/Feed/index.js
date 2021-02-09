import React from 'react';
import styled from 'styled-components'
import profilepic1 from "../../images/Ellipse 1.png";
import publicao1 from "../../images/Rectangle 16.png"
import { AiOutlineLike } from "react-icons/ai";

const Name = styled.p`
font-weight: 400;
font-size: 16px;

padding: 0;
margin: 0;
  `
const ReviewTitle = styled.p`
font-weight: 700;
font-size: 16px;
padding: 0;
margin: 0;
  `

const Post = styled.div`
display: inline-flex;
  width: 100%;
`

const NameAndTitle = styled.div`
padding: 0;
margin: 0;
`

const Review = styled.div`
`

const ReviewText = styled.p`
  font-size: 16px;
  font-weight: 500;
`
const Categorie = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0;
`

const Likes = styled.p`
    display: inline-flex;
    font-size: 14px;
    color: #8B8A8A;
`

const Date = styled.p`
  font-size: 14px;
  color: #8B8A8A;
`

const Title = styled.h1`
  font-size: 28px;
  font-weight: 800;
  color: #002337;`

const InfoAdd = styled.div`
`

const Profile = styled.div`
width: 17%;
`

export default () => {
    return (
        <div className="mt-2 mb-2">
            <Title>FEED</Title>
            <div>
            <Post className="d-flex align-items-center mt-3">
                <Profile className="col-3">
                    <img className="rounded-circle w-100" src={profilepic1} />
                </Profile>
                <NameAndTitle className="col-9">
                    <ReviewTitle>I loved the DaTerra in Aveiro</ReviewTitle>
                    <Name>John Smith</Name>
                </NameAndTitle>
            </Post>
            <Review>
                    <img className="mt-2 mb-3 w-100" src={publicao1} />
                    <Categorie>Restaurants \ Vegan</Categorie>
                    <ReviewText>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </ReviewText>

                <InfoAdd className="d-flex">
                    <Date>
                        04-01-2020 at 23:12
                    </Date>
                    <Likes className="ml-5">
                        <p>2376</p>
                        <AiOutlineLike />
                    </Likes>
                </InfoAdd>
            </Review>
            </div>




        </div>
    )

}