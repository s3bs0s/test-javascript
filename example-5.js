import {cleanConsole, createAll} from './data';
import {exampleFour} from './example-4';
// A copy is saved and not the original so that it
// does not affect the other exercises
const companies = [...createAll()];

cleanConsole(5, companies);

const exampleFive = (companies) => {
  const users = exampleFour(companies);
  const usersWithCar = users.filter((user) => user.car);
  let average = 0;
  let averageWithCar = 0;

  if (users.length) {
    average = users.reduce((reducer, user) => reducer + user.age, 0) / users.length;
  }

  if (usersWithCar.length) {
    averageWithCar = usersWithCar.reduce((reducer, user) => reducer + user.age, 0) / usersWithCar.length;
  }

  return {
    size: users.length,
    average,
    hasCar: usersWithCar.length,
    averageWithCar,
  };
};

console.log('---- EXAMPLE 5 --- ', exampleFive(companies));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Use la función creada en el ejemplo 4 para crear una nueva función tomando
// como parámetro la variable "companies" y devuelve un nuevo objeto con los
// siguientes atributos:
//     'size' => total de "users"
//     'average' => edad promedio de "users"
//     'hasCar' => total de "users" propietarios de un carro
//     'averageWithCar' => edad promedio de los "users" con un carro

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Use the function created in example 4 to create a
// new function taking as parameter the "companies" variable and returning
// a new object with the following attributes:
//     'size' => number of "users"
//     'average' => average age of "users"
//     'hasCar' => number of "users" owning a car
//     'averageWithCar' => average age of users with a car.
