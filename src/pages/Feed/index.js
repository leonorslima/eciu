import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import profilepic1 from "../../images/Ellipse 1.png";
import publicao1 from "../../images/Rectangle 16.png"
import {AiOutlineLike} from "react-icons/ai";
import Navbar from "../../components/Navbar"
import Header from "../../components/Header"
import {fetchPostsCategories, fetchPostUser} from "../../FetchAPI";

const Nome = styled.p`
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
const Poste = styled.div`
  display: inline-flex;
  width: 100%;
`
const Dados = styled.div`
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
const BotaoLike = styled.div`
  width: 1.5rem;
  height: 1.5rem;
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

    const [posts, setPosts] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [userPoster, setUserPoster] = useState([])

    useEffect(() => {
        fetchPostsCategories()
            .then(posts => {
                setPosts(posts);
            });

        fetchPostUser()
            .then(userPoster => {
                setUserPoster(userPoster);
            })
    }, []);

    return (
        <div>
            <Header/>
            <div className="mt-2 mb-2">
                <Title>FEED</Title>


                {posts.map(
                    (Post) => {
                                    return (
                                        <div className="mt-4">
                                            <Poste className="d-flex align-items-center mt-3">
                                                <Profile className="col-3">
                                                    {userPoster.map(
                                                        (poster) => {
                                                            if(poster.idu === Post.userid){
                                                                return(
                                                                    <img className="rounded-circle w-100" src={poster.profilepic} alt="profile"/>
                                                                )
                                                            }})}

                                                </Profile>
                                                <Dados className="col-9">
                                                    <ReviewTitle>{Post.title}</ReviewTitle>

                                                    {userPoster.map(
                                                        (poster) => {
                                                            if(poster.idu === Post.userid){
                                                                return(
                                                                    <Nome>{poster.name}</Nome>
                                                                )
                                                            }})}


                                                </Dados>
                                            </Poste>

                                            <Review>
                                                <img className="mt-2 mb-3 w-100" src={publicao1} alt="postimage"/>
                                                <Categorie>Restaurants \ Vegan</Categorie>
                                                <ReviewText>{Post.text}</ReviewText>
                                                <InfoAdd className="d-flex">
                                                    <Date className="col-10 pl-0 ml-0">
                                                        {Post.date}
                                                    </Date>

                                                </InfoAdd>
                                            </Review>
                                        </div>
                                    )



                    }
                )
                }
                <Navbar/>
            </div>
        </div>
    )

}