const fetchFromAPI = (resourceType) =>
    fetch(`http://localhost:3001/${resourceType}`)
        .then(response => response.json());


export const fetchCategory = () => fetchFromAPI('categories');

export const fetchPostsCategory = (id) =>
    fetch(`http://localhost:3001/categories/${id}`)
        .then(response => response.json())

export const fetchICategory = (id) => fetchFromAPI('categories');

export const fetchPostUser = () => fetchFromAPI('users');

export const fetchUni = () => fetchFromAPI('universities');

export const fetchProfile = () => fetchFromAPI('profiles');

export const createUser = (idu, name, profileid, homeuniversityid, destinyuniversityid, profilepic) =>
    fetch(`http://localhost:3001/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ idu, name, profileid, homeuniversityid, destinyuniversityid, profilepic }),
    }).then((response) => response.json());


export const createPost = (categoryid, subcategoryid, title, text, likes, date) =>
    fetch(`http://localhost:3001/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ categoryid, subcategoryid, title, text, likes, date }),
    }).then((response) => response.json());