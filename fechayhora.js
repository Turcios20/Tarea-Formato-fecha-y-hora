const fecha = new Date(2012, 1, 20, 3, 12);

const horas = fecha.getHours().toString().padStart(2, '0');
const minutos = fecha.getMinutes().toString().padStart(2, '0');


console.log(`Hora formateada: ${horas}:${minutos}`);

