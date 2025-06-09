function ehDataValida(dia, mes, ano) {
    const data = new Date(ano, mes - 1, dia)
    return data.getFullYear() === ano && data.getMonth() === mes - 1 && data.getDate() === dia
} console.log(ehDataValida(23, 4, 1990))