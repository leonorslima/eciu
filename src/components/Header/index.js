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
            <div className="container mt-3">
                <div className="row align-items-center">
                    <div className="col-4">
                    </div>
                    <div className="col-4">
                        <LogEciu src={logoEciu} />
                    </div>
                    <div className="col-4 ">
                        <LogUa src={logoUa}/>
                    </div>
                </div>
            </div>
    )

}