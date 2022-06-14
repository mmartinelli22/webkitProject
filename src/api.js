function fetchApiData(url) {
    return fetch(url)
        .then(promise => promise.json());
};