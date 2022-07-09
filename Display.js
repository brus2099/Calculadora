class Display {

  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculadora = new Calculadora();
    this.tipoOperación = undefined;
    this.valorActual = '';
    this.valorAnterior = '';
    this.signos = {
      sumar: '+',
      restar: '-',
      dividir: '/',
      multiplicar: 'x'
    };
  }

  borrar() {
    this.valorActual = this.valorActual.toString().slice(0, -1);
    this.imprimirValores();
  }

  borrarTodo() {
    this.valorActual = '';
    this.valorAnterior = '';
    this.tipoOperación = undefined;
    this.imprimirValores();
  }

  agregarNumero(num) {
    if(num === '.' && this.valorActual.includes('.')) return
    this.valorActual = this.valorActual.toString() + num.toString();
    this.imprimirValores();
  }

  imprimirValores() {
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperación] || ''}`;
  }

  procesar(tipo) {
    this.tipoOperación !== 'igual' && this.calcular();
    this.tipoOperación = tipo;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = '';
    this.imprimirValores();
  }

  calcular() {
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);
    
    if(isNaN(valorActual) || isNaN(valorAnterior)) return;
    this.valorActual = this.calculadora[this.tipoOperación](valorAnterior, valorActual);
  }

}
