function fatorial(n) {
    if (n < 0) {
        throw new Error
    }if (n === 0) {
        return 1
    } return n * fatorial(n - 1)
}