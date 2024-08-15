class Pizza {
    constructor (massa, molho, cobertura, queijo) {
        this.massa = massa;
        this.molho = molho;
        this.cobertura = cobertura;
        this.queijo = queijo;
    }
    assar() {
        console.log(`Você pediu uma pizza com: ${this.massa}, ${this.molho}, ${this.cobertura} e ${this.queijo}. Correto?`)
    }
}

const pedido = new Pizza('massa fina', 'molho de tomate', 'calabresa com cebola', 'mussarela');

pedido.assar();