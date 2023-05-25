//Types em Objetos:

//Colocar um ? depois da idade, quer dizer que é uma propriedade opcional, pode ou não vir pra função
function resumo(usuário: {nome: string, idade?: number}){  // Aqui especifico os types do meu objeto, abrindo um objeto no retorno da funct.
    return `Olá ${usuário.nome}, você tem ${usuário.idade} anos!`
}


let u = {
    nome: "Arthur",
    idade: 21
};

//Union Types (Múltiplos types)

function mostrarIdade(idade: string | number) { //Adiciono string e number para dizer que a resposta pode vir em ambos
    if(typeof idade === "string"){
        console.log(idade.toUpperCase());

    }else{
        console.log(idade)
    }


}

mostrarIdade(90);
mostrarIdade("90");