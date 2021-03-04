import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Navbar from "../../components/Navbar"
import Header from "../../components/Header"
import {fetchPostUser, fetchUni} from "../../FetchAPI";
import {SemipolarLoading} from 'react-loadingg';
import {Link} from "react-router-dom";

const Title = styled.h4`

font-size: 28px;
font-weight: 800;
color: #002337;
  `
const Name = styled.p`
font-size: 16px;
font-weight: 700;
color: #002337;
margin-bottom: 0;
  `
const Uni = styled.p`
font-size: 14px;
font-weight: 500;
color: #002337;

  `
const Description = styled.p`
font-weight: 400;
font-size: 16px;

  `
const Loading = styled.p`
  margin-left: 2rem;
`
const StyledLink = styled(Link)`
  text-decoration: none;
`
export default () => {
    const [isLoading, setisLoading] = useState(false);
    const [buddies, setBuddies] = useState([]);
    const [universities, setUniversities] = useState([]);


    useEffect(() => {
        setisLoading(true)
        fetchPostUser()
            .then(buddies => {
                setisLoading(false)
                setBuddies(buddies);
            })
        fetchUni()
            .then(universities => {
                    setisLoading(false);
                    setUniversities(universities);
                }
            );
    }, []);

    return (
        <div>
            <Header />
        <div className="mt-2 mb-2">
            <Title>COMMUNITY</Title>
            <Description>Here you can find a list of buddies that are available to help you!</Description>
            <div className="container mt-4" style={{marginBottom: "4rem"}}>

                {!isLoading ? (
                    <div className="row text-center">
                        {buddies.map(
                            (Buddy) => {
                                return (
                                    <div className="col-6" >
                                        <StyledLink to={'/users/'+Buddy.id}>
                                            <img className="rounded-circle w-100" src={Buddy.profilepic} alt="profile"/>
                                            <Name>{Buddy.name}</Name>

                                            {universities.map(
                                                (uni) => {
                                                    if (uni.id === Buddy.homeuniversityid){
                                                        return(
                                                            <Uni>{uni.name}</Uni>
                                                        )
                                                    }
                                                }
                                            )}

                                        </StyledLink>
                                    </div>
                                )
                            })}
                    </div>
                ) : (
                    <Loading className="mt-5"> <SemipolarLoading color={'#002337'}/> </Loading>)}



            </div>
            <Navbar />
        </div></div>
    )
}