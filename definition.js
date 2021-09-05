var obj = {
    nome: "Bruno",
    sobrenome: "CarvdSa",
    idade: 16,
    apresentar: apresentacao
}

function apresentacao(){
    console.log("Olá eu sou " + this.nome + ' ' + this.sobrenome + '.');
}


obj.apresentar();