let phrase = "Amo minha namorada"
let words = phrase.split(" ")
let oneW = []

for (let i = 0; i < words.length; i++) {
    let ex = false
    for (let j = 0; j < oneW.length; j++) {
        if (words[i] === oneW[j]) {
            ex = true
        } break
    }
    if (!ex) {
        oneW.push(words[i])
    }
} console.log(oneW)