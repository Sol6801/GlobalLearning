/*EJERCICIO:  usar fs de Node.js para crear y escribir un archivo de texto con la respuesta del siguiente ejercicio:

	Hacer una función que determine la cantidad de números pares presentes en el archivo datos.txt que se les proporcionará. 

DESAFÍO:  hacer un timer que muestre en pantalla una cuenta del 1 al 10 mediante el uso de un bucle for. Una vez realizado el timer, verificar qué sucede si en lugar de utilizar let para declarar el iterador del bucle se utiliza var. Intentar corregir dicho comportamiento observado. */

//import { readFileSync } from 'node:fs';

// readFileSync('/datos.txt', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });


/*function evenNumber (data){
	const numbers = data.split(' '); //.map(Number) cambia type a number
	let evenList = []
	numbers.forEach(n => {
		  if ((n % 2) === 0) {
			  evenList.push(n)
		  }
	  });
	return evenList
  } */



import fs from 'node:fs';

let answer = []
try {
  const data = fs.readFileSync('datos.txt', 'utf8');
  answer = evenNumber(data)
  console.log(answer);
} catch (err) {
  console.error(err);
}

function evenNumber (numbers){
	let data = numbers.split(' ').map(Number);
	return data.filter(n => (n % 2) === 0);
}


try {
  fs.writeFileSync('respuesta.txt', answer.join(' '));
} catch (err) {
  console.error(err);
}
