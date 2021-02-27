import '../../App.css'
import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components'
import one from "../../images/1.png"
import imgAccomodation from "../../images/2.png"
import imgTransports from "../../images/3.png"
import imgJobs from "../../images/4.png"
import imgLeisure from "../../images/5.png"
import imgHealth from "../../images/6.png"
import Navbar from "../../components/Navbar"
import Header from "../../components/Header"
import {fetchCategory } from "../../FetchAPI";


const Label = styled.h3`
color: white;
font-weight: bold;
text-align: center;

  `

const Title = styled.h4`

font-size: 28px;
font-weight: 800;
color: #002337;
  `

const Restaurants = styled.div`
background-size: cover;`

const StyledLink = styled(Link)`
text-decoration: none;
`

const Accomodation = styled.div`

background-image: url(${imgAccomodation});
background-size: cover;

  `

const Transports = styled.div`

background-image: url(${imgTransports});
background-size: cover;

  `

const Jobs = styled.div`

background-image: url(${imgJobs});
background-size: cover;
`

const Leisure = styled.div`

background-image: url(${imgLeisure});
background-size: cover;
`

const Health = styled.div`

background-image: url(${imgHealth});
background-size: cover;
`

export default () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
        setisLoading(true)
        fetchCategory()
            .then(posts => {
                setPosts(posts);
                setisLoading(false);
                console.log(posts);
            }

             );
    }, []);

    return (
        <div>
            <Header />
            <div className="mt-2 mb-2">
            <Title>CATEGORIES</Title>
            <div className="mt-4">
                {posts.map(
                    (Post)=> {
                        return(
                            <StyledLink to={"/" + Post.name}>
                                <div  style={{backgroundImage: "url(" + Post.imgFundo + ")", backgroundSize: 'cover'}}>
                                    <Label className="p-4 text-uppercase">
                                        {Post.name}
                                        {console.log(Post.imgFundo)}
                                        {console.log(Post.name)}
                                    </Label>
                                </div>
                            </StyledLink>
                        )
                    }
                )
                }
            </div>

<Navbar />
        </div></div>
    )

}