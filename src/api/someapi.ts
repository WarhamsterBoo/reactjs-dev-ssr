import fetch from 'isomorphic-unfetch';

export async function fetchSomething(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const body = await response.json();
    if (response.status !== 200) {
        throw Error(body.message);
    }
    return body;
}