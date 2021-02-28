import React from 'react'

const fetchFromAPI = (resourceType) =>
    fetch(`http://localhost:3001/${resourceType}`)
        .then(response => response.json());


export const fetchCategory = () => fetchFromAPI('categories');

export const fetchPostsCategory = (id) =>
    fetch(`http://localhost:3001/categories/${id}`)
        .then(response => response.json())

/*export const fetchICategory = (id) =>
    fetch(`http://localhost:3001/categories/${id}`)
        .then(response => response.json())*/

export const fetchICategory = (id) => fetchFromAPI('categories');
