export function fetchWithTimout(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}