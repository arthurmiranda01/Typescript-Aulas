//Types literais
//Quando eu quero que o meu type receba algo específico, exemplo de uso prático:

function mostrarTexto(texto: string, alinhamentos: "left" | "center" | "right" | "down") { //Perceba que alinhamentos só vai receber uma dessas informações, isso impede que alguém introduza um blabla em alinhamento e o código aceite, por se tratar de uma string, aceitaria.
    
}



//Interferência literal

function fazerRequisicao(url: string, method: "GET" | "POST"){
    //...
}

type RequestDetails = {
    url: string, 
    method: "GET" | "POST"
}

let req: RequestDetails = {
    url: 'www.google.com',
    method: "POST"
}

fazerRequisicao(req.url, req.method); // Tive que especificar um pouco mais


//Type para funções:

type MathFunction = (n1: number, n2: number) => number; //Criei o type aqui pra usar na função abaixo

const somar: MathFunction = (n1, n2) => {
    return n1 + n2;
}


//Retorno VOID
//É quando eu não espero um retorno da minha função, ela vai executar o que tiver pra executar e finalizar
