function memoize(fn) {
  const cache = {}
  return function(arg) {
    if (cache[arg] !== undefined) {
      return cache[arg]
    }
    cache[arg] = fn(arg)
    return cache[arg]
  }
}