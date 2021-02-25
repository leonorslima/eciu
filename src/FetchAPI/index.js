import React from 'react'

const fetchFromAPI = (resourceType) =>
    fetch(`http://localhost:3002/${resourceType}`)
        .then(response => response.json());


export const fetchCategory = () => fetchFromAPI('categories');


/*

export const FetchAPIIndividual = (id) =>
    fetch(`http://localhost:3001/v1/characters/${id}`)
        .then(response => response.json())

*/
