const fechaActual = new Date();

const diasSemana = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const diaSemanaCorto = diasSemana[fechaActual.getDay()];

console.log(`Hoy es: ${diaSemanaCorto}`);
