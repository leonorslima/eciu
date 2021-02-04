import '../../App.css'
import React from 'react';
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

const Restaurants = styled.div`

background-image: url(${imgRestaurants});
background-size: cover;
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
        <div className="mt-3">
            <Restaurants>
               <Label className="p-4">RESTAURANTS</Label>
            </Restaurants>
            <Accomodation>
                <Label className="p-4">ACCOMODATION</Label>
            </Accomodation>
            <Transports>
                <Label className="p-4">TRANSPORTS</Label>
            </Transports>
            <Jobs>
                <Label className="p-4">JOBS</Label>
            </Jobs>
            <Leisure>
                <Label className="p-4">LEISURE</Label>
            </Leisure>
            <Health>
                <Label className="p-4">HEALTH</Label>
            </Health>

        </div>
    )

}