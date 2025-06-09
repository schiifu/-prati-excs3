function totalPC(vendas) {
  return vendas.reduce((res, v) => {
    res[v.cliente] = (res[v.cliente] || 0) + v.total
    return res
  }, {})
} const vendas = [
  {cliente: "Carlos", total: 100},
  {cliente: "Roberta", total: 200},
  {cliente: "Carlos", total: 50}
]
console.log(totalPC(vendas))