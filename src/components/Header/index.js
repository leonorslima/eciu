import React from "react";
import styled from "styled-components"
import logoUa from "../../images/logoua.png"
import logoEciu from "../../images/logoeciu.png"

const LogUa = styled.img`
height: 25px;
  `
const LogEciu = styled.img`
height: 46px;
  `

export default () => {

    return (

            <div>

            <LogEciu src={logoEciu} />

            <LogUa src={logoUa}/>

            </div>
    )

}