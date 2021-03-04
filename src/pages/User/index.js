import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {FaMapMarkerAlt, FaEdit} from "react-icons/fa";
import {Link, useParams} from "react-router-dom";
import Navbar from "../../components/Navbar"
import HeaderBack from "../../components/HeaderBack"
import {fetchUni, fetchUtilizador} from "../../FetchAPI";
import {SemipolarLoading} from "react-loadingg";

const Button = styled(Link)`
  background-color: #002337;
  color: white;
`
const Name = styled.h4`
  font-weight: 700;
  font-size: 22px;
`
const Info = styled.p`
  font-weight: 400;
  font-size: 16px;
`
const Title = styled.h1`
  font-size: 28px;
  font-weight: 800;
  color: #002337;
  `
const Loading = styled.p`
  margin-left: 2rem;
`

export default () => {

    const {id} = useParams();
    const [isLoading, setisLoading] = useState(false);
    const [utilizador, setUtilizador] = useState([])
    const [universities, setUniversities] = useState([]);

    useEffect(() => {
        setisLoading(true)
        fetchUtilizador(id)
            .then(utilizador => {
                setisLoading(false);
                setUtilizador(utilizador)
            });
        fetchUni()
            .then(universities => {
                    setisLoading(false);
                    setUniversities(universities);
                }
            );
    }, []);


    return (

        <div>
            <HeaderBack />
            {!isLoading ? (
                <div className="mt-2">
                    <Title>PROFILE</Title>
                    {utilizador.map(
                        (Utilizador) => {
                            if (Utilizador.id === id) {

                                return (
                                    <div>
                                        <div className="text-center mt-5">
                                            <img className="mt-4 mb-3 rounded-circle w-50"
                                                 src={Utilizador.profilepic} alt="profile"/>
                                            <div>
                                                <Name className="mb-0 pb-0 mb-2">{Utilizador.name}</Name>
                                                <Info className="mb-5">
                                                    <FaMapMarkerAlt/> From <b>
                                                    {universities.map(
                                                        (uni) => {
                                                            if (uni.id === Utilizador.homeuniversityid){
                                                                return(
                                                                    uni.name
                                                                )
                                                            }
                                                        }
                                                    )}
                                                </b></Info>
                                                <Info className="mb-5"> Buddy since 2018 </Info>
                                                <Button className="mt-5 p-3" to={"/privatechat"}>
                                                    <FaEdit/> Send a Message
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )


                            }
                        }
                    )
                    }


                </div>
            ) : (
                <Loading className="mt-5"> <SemipolarLoading color={'#002337'}/> </Loading>
            )}


            <Navbar/>
        </div>


    )

}