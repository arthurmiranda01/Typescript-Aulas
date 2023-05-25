//Type e Interface: Como usar e diferenças
//Criando um type próprio:

type Idade = string | number;

let idade: Idade = 90;
let idadeDois: Idade = "90"



interface User {
    nome: string;
    idade: number;
}// Criei um tipo pra usar na minha função, em casos de objetos, ao invés de usa type, uso interface, funciona igual.


function resumao(usuário: User){  
    return `Olá ${usuário.nome}, você tem ${usuário.idade} anos!`
}


let us = {
    nome: "Arthur",
    idade: 21
};
