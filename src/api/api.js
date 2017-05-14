export default (genre) => {
    return fetch(`http://localhost:8010/shows/${genre}`)
        .then(response => Promise.all([response, response.json()]))
}