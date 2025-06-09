function parPobj(pares) {
  return Object.fromEntries(pares)
} const pares = [["banda", "Violent Femmes"], ["ano", 1983]]
const obj = parPobj(pares)
console.log(obj)
function objPpar(obj) {
  return Object.entries(obj)
} const nPares = objPpar(obj)
console.log(nPares)