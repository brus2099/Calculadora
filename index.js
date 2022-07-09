const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
const borrar = document.getElementById('borrar');
const limpiar = document.getElementById('limpiar');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
  boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

borrar.addEventListener('click', () => display.borrar());
limpiar.addEventListener('click', () => display.borrarTodo());

botonesOperadores.forEach(boton => {
  boton.addEventListener('click', () => display.procesar(boton.value));
});