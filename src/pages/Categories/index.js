import '../../App.css'
import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components'
import imgRestaurants from "../../images/restaurants.jpg"
import imgAccomodation from "../../images/accomodation.png"
import imgTransports from "../../images/transports.png"
import imgJobs from "../../images/jobs.png"
import imgLeisure from "../../images/leisure.png"
import imgHealth from "../../images/health.png"

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

background-image: url(${imgRestaurants});
background-size: cover;
}
  `
const StyledLink = styled(Link)`
text-decoration: none;
}
  `

const Accomodation = styled.div`

background-image: url(${imgAccomodation});
background-size: cover;
}
  `

const Transports = styled.div`

background-image: url(${imgTransports});
background-size: cover;
}
  `

const Jobs = styled.div`

background-image: url(${imgJobs});
background-size: cover;
}
  `

const Leisure = styled.div`

background-image: url(${imgLeisure});
background-size: cover;
}
  `

const Health = styled.div`

background-image: url(${imgHealth});
background-size: cover;
}
  `

export default () => {
    return (
        <div className="mt-2 mb-2">
            <Title>CATEGORIES</Title>
            <div className="mt-4">
            <StyledLink to={"/restaurants"}>
                <Restaurants>
                    <Label className="p-4">RESTAURANTS</Label>
                </Restaurants>
            </StyledLink>
            <StyledLink to={"/"}>
                <Accomodation>
                    <Label className="p-4">ACCOMODATION</Label>
                </Accomodation>
            </StyledLink>
            <StyledLink to={"/transports"}>
                <Transports>
                    <Label className="p-4">TRANSPORTS</Label>
                </Transports>
            </StyledLink>
            <StyledLink to={"/"}>
                <Jobs>
                    <Label className="p-4">JOBS</Label>
                </Jobs>
            </StyledLink>
            <StyledLink to={"/"}>
                <Leisure>
                    <Label className="p-4">LEISURE</Label>
                </Leisure>
            </StyledLink>
            <StyledLink to={"/"}>
                <Health>
                    <Label className="p-4">HEALTH</Label>
                </Health>
            </StyledLink>
            </div>


        </div>
    )

}