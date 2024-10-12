class Heroi{
    nome 
    idade 
    tipo 

    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo

    }

    atacar() {
        let ataque
        if(this.tipo === "mago"){
            ataque = "magia"
        } else if(this.tipo === "guerreiro"){
            ataque = "espada"
        } else if(this.tipo === "monge"){
            ataque = "artes marciais"
        } else if(this.tipo === "ninja"){
            ataque = "shuriken"
        } else {
            ataque = "tipo inválido"
        } 

        if(ataque === "tipo inválido"){
            console.log(ataque)
        } else {
            console.log(`o ${this.tipo} atacou usando ${ataque}`)
        }
    }
}

protagonista = new Heroi("Satoro Gojo", 23, "mago");

protagonista.atacar()