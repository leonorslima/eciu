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

export const fetchPostUser = () => fetchFromAPI('users');

export const fetchUni = () => fetchFromAPI('universities');

export const createUser = (idu, name, roleid, homeuniversityid, destinyuniversityid) =>
    fetch(`http://localhost:3001/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ idu, name, roleid, homeuniversityid, destinyuniversityid }),
    }).then((response) => response.json());