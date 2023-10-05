function saveItemStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function getItemStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

