import '../../App.css'
import React, {useState, useEffect} from 'react';
import {Link } from "react-router-dom";
import styled from 'styled-components'
import Navbar from "../../components/Navbar"
import Header from "../../components/Header"
import {fetchCategory } from "../../FetchAPI";
import "firebase/auth";
import {SemipolarLoading} from 'react-loadingg';

const Label = styled.h3`
  color: white;
  font-weight: bold;
  text-align: center;`
const Title = styled.h4`
  font-size: 28px;
  font-weight: 800;
  color: #002337;`
const StyledLink = styled(Link)`
  text-decoration: none;
`
const Loading = styled.p`
  margin-left: 2rem;
`

export default (props) => {
    const [loggeduser, setLoggeduser] = useState('');
    const [posts, setPosts] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {

        setisLoading(true);
         fetchCategory()
            .then(posts => {
                    setPosts(posts);
                    setisLoading(false);
                });


        }, []);
    console.log(props.user);

    return (
        <div>
            <Header />
            <div className="mt-2 mb-2">
                <Title>CATEGORIES</Title>
                {
                   props.user !== '' ? (

                    !isLoading ? (
                               <div className="mt-4" style={{marginBottom: "4rem"}}>
                                   {posts.map(
                                       (Post)=> {
                                           if(Post.parentcategoryid === null){
                                               return(
                                                   <StyledLink to={"/categories/" + Post.id} >
                                                       <div  style={{backgroundImage: "url(" + Post.imgFundo + ")", backgroundSize: 'cover'}}>
                                                           <Label className="p-4 text-uppercase">
                                                               {Post.name}
                                                           </Label>
                                                       </div>
                                                   </StyledLink>
                                               )}})}
                               </div>) : <Loading className="mt-5"> <SemipolarLoading color={'#002337'}/> </Loading>
                       ) : (
                           console.log("nao ha login")
                   )




                }


                <Navbar />
            </div>
        </div>
    )



}