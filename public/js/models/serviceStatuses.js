function getServiceStatuses(serverAddress) {
    return fetch(serverAddress)
        .then(response => response.json())
        .then(data => data);
}