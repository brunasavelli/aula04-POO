class Pessoa {
    constructor (nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    seApresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos de idade e tenho ${this.altura}cm de altura`)
    }
}

const user = new Pessoa("Bruna", 16, 1.61);
const user1 = new Pessoa("Fernanda", 21, 1.61);

user.seApresentar();
user1.seApresentar();

console.clear();

//console.log(user);
//console.log(user1);

