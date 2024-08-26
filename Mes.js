const fechaActual = new Date();

const meses = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const mesActual = meses[fechaActual.getMonth()];

console.log(`Mes actual: ${mesActual}`);