function validateCPF(cpf = ''){
    if(cpf.length == '')return
    const cpfArray = cpf.split('')
    const primeiroDigito = digitOne(cpfArray)
    const segundoDigito = digitTwo(cpfArray,primeiroDigito)
    cpfArray.push(segundoDigito)
    const cpfFinal = cpfArray.join('')
    return cpfFinal
}
function digitOne(cpfArray){
    const somaDigitos = cpfArray.map((num, index)=>{return num * (10 - index)})
    .reduce((acumalador, valorCorrente)=>acumalador+=valorCorrente,0)
    const digito1 = (11 - (somaDigitos % 11)) > 9 ? '0' : (11 - (somaDigitos % 11))
    return String(digito1)
}
function digitTwo(cpfArray, digitOne){
    cpfArray.push(digitOne)
    const somaDigitos = cpfArray.map((num, index)=>{return num * (11 - index)})
    .reduce((acumalador, valorCorrente)=>acumalador+=valorCorrente,0)
    const digito2 = (11 - (somaDigitos % 11)) > 9 ? '0' : (11 - (somaDigitos % 11))
    return String(digito2)
}

export {
    validateCPF,
    digitOne,
    digitTwo
}