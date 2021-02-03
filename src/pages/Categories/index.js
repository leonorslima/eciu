import React from 'react';
import styled from 'styled-components'
import imgRestaurants from "../../images/restaurants.png"


export default () => {
    return (
        <div>
            <div>
                <img src={imgRestaurants} className="w-100 p-relative" />
                <span><h1 className="p-absolute">Restaurants</h1></span>
            </div>

        </div>
    )

}