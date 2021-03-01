import '../../App.css';
import React, {useEffect, useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {FaEdit, FaSearch, FaChevronDown} from "react-icons/fa";
import imgUser from "../../images/user.png";
import {AiOutlineLike} from "react-icons/ai";
import Navbar from "../../components/Navbar";
import HeaderBack from "../../components/HeaderBack";
import {fetchICategory, fetchPostsCategory, fetchPostUser} from "../../FetchAPI";
import {useParams} from "react-router-dom";
import {SemipolarLoading} from 'react-loadingg';

const Title = styled.h4`
  font-size: 28px;
  font-weight: 800;
  color: #002337;`
const BtnFollow = styled(Link)`
  border: 1px solid;
  border-radius: 2px;
  text-align: center;
  height: 30px;
  width: 80px;`

const BtnLike = styled(Link)`
  border-radius: 2px;
  text-align: center;
  height: 30px;
  background-color: #002337;
  color: white;
  `

const BtnCreate = styled(Link)`
  background-color: #002337;
  color: white;
  border-radius: 2px;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  height: 50px;
`
const BtnSearch = styled(Link)`
  background-color: #002337;
  color: white;
  border-radius: 2px;
  text-align: center;
  line-height: 50px;
  height: 50px;`
const Tips = styled.div`
`
const TopTips = styled.div`
  padding-bottom: 5px;`
const TopTip = styled.div`
  background-color: white;
  margin: 0 20px 0;
  padding: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  & img {
    height: 57px;
  }`
const Tip = styled.div`
  background-color: white;
  margin: 0 0.2rem 0 0.2rem;
  padding: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  & img {
    height: 57px;
  }`
const Text = styled.p`
  font-weight: 700;
  margin-bottom: 0;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;`
const Name = styled.p`
  font-weight: 400;
  margin-bottom: 0;`
const TitleTopTips = styled.h5`
  font-weight: 700;`
const Subcategories = styled.div`
  overflow: auto;
  white-space: nowrap;

  & img {
    height: 60px;
    padding: 10px;
  }`
const Sub = styled.div`
  text-align: center;
  justify-content: center;
  border-radius: 50%;
  height: 70px;
  width: 70px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);`
const InfoAdd = styled.div``
const Label = styled.p`
  font-size: 16px;
  font-weight: 700;
  text-align: center;`
const Likes = styled.p`
  display: inline-flex;
  font-size: 14px;
  color: #8B8A8A;`

/*const BotaoLike = styled.div`
  width: 1.5rem;
  height: 1.5rem;`*/

const Date = styled.p`
  font-size: 14px;
  color: #8B8A8A;`
const Loading = styled.p`
  margin-left: 2rem;
`

export default () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [nome, setNome] = useState([]);
    const [userPoster, setUserPoster] = useState([])
    const [filtro, setFiltro] = useState('');
    const {id} = useParams();

    useEffect(() => {
        setisLoading(true)
        fetchICategory(id)
            .then(nome => {

                setNome(nome);
            })

        fetchPostsCategory(id)
            .then(posts => {
                setPosts(posts);
                setisLoading(false)
            });

        fetchPostUser()
            .then(userPoster => {
                setUserPoster(userPoster);
            })
    }, []);

    return (
        <div>

            <HeaderBack/>
            {nome.map(
                (Nome) => {
                    if (Nome.id === id) {
                        return (
                            <div className="d-flex">
                                <Title className="mt-2 mb-2 mr-5 text-uppercase">
                                    {Nome.name}
                                </Title>
                                <BtnFollow className="align-self-center text-decoration-none"
                                           style={{color: Nome.color, borderColor: Nome.color,}}>Follow</BtnFollow>
                            </div>
                        )
                    }
                })}


            <div className="d-flex text-center mt-4">
                <BtnCreate className="col-9 mr-4" to={"/createpost/" + id}>
                    <FaEdit className="mr-2"/> Create Post
                </BtnCreate>
                <BtnSearch className="col-2" to={"/searchresults"}>
                    <FaSearch/>
                </BtnSearch>
            </div>

            {!isLoading ? (
                <div>
                    <Subcategories className="d-flex mt-3">
                        <div className="mr-3 text-center">
                            <Sub className="justify-content-center">
                                <a onClick={() =>{setFiltro('')}}>
                                    <img src={"https://i.imgur.com/VtZEsvZ.png"} alt="all"/>
                                </a>
                            </Sub>
                            <Label>All</Label>
                        </div>
                        {nome.map(
                            (Nome) => {
                                if (Nome.parentcategoryid === id) {
                                    return (
                                        <div className="mr-3 text-center">
                                            <Sub className="justify-content-center">
                                                <a onClick={()=> {setFiltro(Nome.id)}}>
                                                    <img src={Nome.img} alt="all"/>
                                                </a>
                                            </Sub>
                                            <Label>{Nome.name}</Label>
                                        </div>
                                    )}
                            })}
                    </Subcategories>

                    <Tips>

                        {nome.map(
                            (Nome) => {
                                if (Nome.id === id) {
                                    console.log(filtro);
                                    if(filtro === ''){
                                        return (
                                            <TopTips className="mb-3" style={{backgroundColor: Nome.color}}>
                                                <TitleTopTips className="mt-0 pt-2 pl-3">TOP-TIPS</TitleTopTips>
                                                {posts.map(
                                                    (Post) => {
                                                        if (Post.categoryid === id) {
                                                            const unixTime = Post.date._seconds;
                                                            var datapost = new window.Date(unixTime * 1000);
                                                            return (
                                                                <Accordion className="align-self-center col-12 pl-0 pr-0">
                                                                    <TopTip className="d-flex row mb-3">
                                                                        <div className="col-3 pl-0 mt-2">
                                                                            {userPoster.map(
                                                                                (Poster) => {
                                                                                    if (Poster.idu === Post.userid) {
                                                                                        return (
                                                                                            <img className="rounded-circle" src={Poster.profilepic}
                                                                                                 alt="profile"/>
                                                                                        )
                                                                                    }
                                                                                })}

                                                                        </div>
                                                                        <div className="col-7 pl-0 mt-2">
                                                                            <Text>
                                                                                {Post.title}
                                                                            </Text>
                                                                            {userPoster.map(
                                                                                (Poster) => {
                                                                                    if (Poster.idu === Post.userid) {
                                                                                        return (
                                                                                            <Name>{Poster.name}</Name>
                                                                                        )
                                                                                    }
                                                                                })}
                                                                        </div>

                                                                        <Accordion.Toggle eventKey="0" style={{
                                                                            border: "transparent",
                                                                            backgroundColor: "white"
                                                                        }}
                                                                                          className="col-2">
                                                                            <FaChevronDown/>
                                                                        </Accordion.Toggle>

                                                                        <Accordion.Collapse eventKey="0">
                                                                            <div>
                                                                                <h6 className="mt-3">{Post.text} </h6>
                                                                                <InfoAdd className="d-flex">
                                                                                    <Date className="col-8 pl-0 ml-0 mb-0">
                                                                                        {datapost.toLocaleDateString("en-GB")}
                                                                                    </Date>
                                                                                    <BtnLike>
                                                                                    <Likes className="ml-4 col-md-4 mb-0">
                                                                                        <p>{Post.likes.length}</p>
                                                                                            <AiOutlineLike
                                                                                                className={"w-100"}/>

                                                                                    </Likes></BtnLike>
                                                                                </InfoAdd>
                                                                            </div>
                                                                        </Accordion.Collapse>
                                                                    </TopTip>
                                                                </Accordion>
                                                            )
                                                        }
                                                    })}
                                            </TopTips>
                                        )
                                    }else {
                                        return (
                                            <TopTips className="mb-3" style={{backgroundColor: Nome.color}}>
                                                <TitleTopTips className="mt-0 pt-2 pl-3">TOP-TIPS</TitleTopTips>
                                                {posts.map(
                                                    (Post) => {
                                                        if (filtro === Post.subcategoryid) {

                                                            const unixTime = Post.date._seconds;
                                                            var datapost = new window.Date(unixTime * 1000);
                                                            return (
                                                                <Accordion className="align-self-center col-12 pl-0 pr-0">
                                                                    <TopTip className="d-flex row mb-3">
                                                                        <div className="col-3 pl-0 mt-2">
                                                                            {userPoster.map(
                                                                                (Poster) => {
                                                                                    if (Poster.idu === Post.userid) {
                                                                                        return (
                                                                                            <img className="rounded-circle" src={Poster.profilepic}
                                                                                                 alt="profile"/>
                                                                                        )
                                                                                    }
                                                                                })}
                                                                        </div>
                                                                        <div className="col-7 pl-0 mt-2">
                                                                            <Text>
                                                                                {Post.title}
                                                                            </Text>
                                                                            {userPoster.map(
                                                                                (Poster) => {
                                                                                    if (Poster.idu === Post.userid) {
                                                                                        return (
                                                                                            <Name>{Poster.name}</Name>
                                                                                        )
                                                                                    }
                                                                                })}
                                                                        </div>

                                                                        <Accordion.Toggle eventKey="0" style={{
                                                                            border: "transparent",
                                                                            backgroundColor: "white"
                                                                        }}
                                                                                          className="col-2">
                                                                            <FaChevronDown/>
                                                                        </Accordion.Toggle>

                                                                        <Accordion.Collapse eventKey="0">
                                                                            <div>
                                                                                <h6 className="mt-3">{Post.text} </h6>
                                                                                <InfoAdd className="d-flex">
                                                                                    <Date className="col-8 pl-0 ml-0 mb-0">
                                                                                        {datapost.toLocaleDateString("en-GB")}
                                                                                    </Date>
                                                                                    <Likes className="ml-4 col-md-4 mb-0">
                                                                                        <p>{Post.likes.length}</p>
                                                                                        {/*<BotaoLike>*/}
                                                                                            <AiOutlineLike
                                                                                                className={"w-100"}/>
                                                                                        {/*</BotaoLike>*/}

                                                                                    </Likes>
                                                                                </InfoAdd>
                                                                            </div>
                                                                        </Accordion.Collapse>
                                                                    </TopTip>
                                                                </Accordion>
                                                            )
                                                        }
                                                    })}
                                            </TopTips>
                                        )
                                    }

                                }
                            })}

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
                                                {/*<BotaoLike>*/}
                                                    <AiOutlineLike className={"w-100"}/>
                                                {/*</BotaoLike>*/}

                                            </Likes>
                                        </InfoAdd>
                                    </div>
                                </Accordion.Collapse>
                            </Tip>
                        </Accordion>
                    </Tips>
                    <Navbar/>
                </div>
            ) : <Loading className="mt-5"> <SemipolarLoading color={'#002337'}/> </Loading>} </div>
    )
}