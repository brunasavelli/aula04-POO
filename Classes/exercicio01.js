class Pessoa {
    constructor (nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
}

const user = new Pessoa("Bruna", 16, 1.61)
const user1 = new Pessoa("Fernanda", 21, 1.61)

console.log(user);
console.log(user1);