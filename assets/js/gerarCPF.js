import {validateCPF} from "./validadorCPF.js";

function gerarCPF(){
    const cpfValido = validateCPF(randomNineNums())
    return cpfValido
}

function randomNineNums(){
    let cpf = ''
    for(let i = 0 ; i < 9 ; i++){
        cpf += Math.floor(Math.random() * (9 - 0) + 0)
    };
    return cpf
}

export {gerarCPF}


