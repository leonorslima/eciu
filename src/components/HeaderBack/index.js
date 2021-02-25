import React from "react";
import styled from "styled-components"
import logoUa from "../../images/logoua.png"
import logoEciu from "../../images/logoeciu.png"
import { FaChevronLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";


const LogUa = styled.img`
height: 25px;
  `
const LogEciu = styled.img`
height: 46px;
  `

export default () => {
    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }

    return (
        <div className="container mt-3">
            <div className="row align-items-center">
                <div className="col-4" onClick={goToPreviousPath}>
                    <FaChevronLeft />
                </div>
                <div className="col-4">
                    <LogEciu src={logoEciu}  alt="logoeciu"/>
                </div>
                <div className="col-4 ">
                    <LogUa src={logoUa}  alt="logoua"/>
                </div>
            </div>
        </div>
    )

}