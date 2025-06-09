let prompt = require('prompt-sync')({sigint:true})

let randomN = Math.floor(Math.random() * 100) + 1
let guess
let tentativas = 0
do {
    guess = parseInt(prompt("Insira um número de 1 a 100: "))
    tentativas++

    if(guess < 0 || guess > 100)
        console.log("Inválido. Insira um número de 1 a 100:")
    else if(guess < randomN)
        console.log("Mais alto!")
    else if(guess > randomN)
        console.log("Mais baixo!")
    else if(guess === randomN)
        console.log(`Parabéns! Foram ${tentativas} tentativas.`)
} while (guess !== randomN)