function debounce(fn, delay) {
    let timeoutId
    return function() {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(fn, delay)
    }
} const minhaMFunction = () => console.log("Executado")
const debouncedF = debounce(minhaMFunction, 1000)
debouncedF()
debouncedF()
debouncedF()