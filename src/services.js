module.exports = function fetchWithTimout(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, delay);
    })
}