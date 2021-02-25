import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import logoEciu from "../../images/logoeciu.png"

const Button = styled(Link)`
background-color: #002337;
color: white;
border-radius: 2px;
font-weight: 600;`

export default () => {
    return (
        <div className="text-center">
            <div>
                <img src={logoEciu} className="w-50 mb-5 mt-5"  alt="logoeciu"/>
            </div>
            <div className="mt-5 mb-5">
                <Button className="p-3" to={"/signin"}>
                    Sign In
                </Button>
            </div>
            <div>
                <Button className="p-3"  to={"/signup"}>
                    Sign Up
                </Button>
            </div>
        </div>

    )
}
