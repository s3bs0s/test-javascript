import {cleanConsole, createAll} from './data';
import {exampleFour} from './example-4';
// A copy is saved and not the original so that it
// does not affect the other exercises
const companies = [...createAll()];

cleanConsole(6, companies);

const exampleSix = (companies) => {
  const users = {};

  exampleFour(companies).forEach((user) => {
    users[user.firstName + user.lastName + user.age] = user.car;
  });

  return users;
};


console.log('---- EXAMPLE 6 --- ', exampleSix(companies));


// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un nuevo objeto cuyos atributos son la concatenación del apelido, nombre y
// edad de cada "user". Cada atributo debe tener el valor de boolean "car".
// Ver ejemplo a continuación.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a new object whose attributes are the concatenation of the name, first name and
// the age of each user. Each attribute must have the value of boolean "car".
// See example below

const example = {
  johnDoe32: true,
  BernardoMinet45: false,
  alinaChef23: true,
};

console.log(example);
