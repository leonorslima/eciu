import React from 'react';
import styled from 'styled-components'
import profilepic1 from "../../images/Ellipse 1.png";
import publicao1 from "../../images/Rectangle 16.png"
import { AiOutlineLike } from "react-icons/ai";

const Name = styled.p`
font-weight: 400;
font-size: 16px;
  `
const Titulo = styled.p`
font-weight: 700;
font-size: 16px;
  `

const Post = styled.div`
display: inline-flex;
  width: 100%;
`

const NameAndTitle = styled.div`
  margin-top: 9%;
  margin-left: 5%;
`

const Publicacao = styled.div`
`

const Texto = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-family: "TT Norms Pro";
`
const Categoria = styled.p`
  font-size: 16px;
  font-weight: 700;
  font-family: "TT Norms Pro";
`

const Likes = styled.p`
    display: inline-flex;
    font-size: 14px;
    color: #8B8A8A;
`

const Data = styled.p`
  font-size: 14px;
  color: #8B8A8A;
`

const Menu = styled.h1`
  font-size: 28px;
  font-weight: 800;
  color: #002337;`

const InfoAdd = styled.div`
display: inline-flex;
`

const Prof = styled.div`
width: 17%;
`

export default () => {
    return (
        <div>
            <Menu>Feed</Menu>
            <div className="mr-0 ml-0">
            <Post>
                <Prof >
                    <img className="mt-4 mb-3 rounded-circle" width="100%" src={profilepic1} />
                </Prof>
                <NameAndTitle>
                    <Titulo className="mb-0 pb-0">I loved the DaTerra in Aveiro</Titulo>
                    <Name className="mb-0 pb-0">John Smith</Name>
                </NameAndTitle>
            </Post>
            <Publicacao>
                    <img className="mt-4 mb-3" width="100%" src={publicao1} />
                    <Categoria>Restaurants \ Vegan</Categoria>
                    <Texto>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </Texto>

                <InfoAdd>
                    <Data>
                        04-01-2020 at 23:12
                    </Data>
                    <Likes>
                        <p>2376</p>
                        <AiOutlineLike />
                    </Likes>
                </InfoAdd>
            </Publicacao>
            </div>




        </div>
    )

}