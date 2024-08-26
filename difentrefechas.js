const fecha1 = new Date('2024-08-01'); 
const fecha2 = new Date('2024-08-25'); 

const diferenciaMilisegundos = fecha2 - fecha1;

const milisegundosPorDia = 1000 * 60 * 60 * 24;
const diferenciaDias = diferenciaMilisegundos / milisegundosPorDia;

console.log(`La diferencia entre las dos fechas es de ${diferenciaDias} días.`);
