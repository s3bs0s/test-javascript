import {cleanConsole, createAll} from './data';
// A copy is saved and not the original so that it
// does not affect the other exercises
const companies = [...createAll()];

cleanConsole(4, companies);

export const exampleFour = (companies) => {
  let users = [];

  companies.forEach((company) => {
    const usersCompany = company.users.map((user) => ({...user, company: company.name}));
    users = [...users, ...usersCompany];
  });

  return users.sort((a, b) => b.age - a.age);
};

console.log('---- EXAMPLE 4 --- ', exampleFour(companies));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y agrupando
// todos los "users" de todas las "companies" en una sola tabla. Cada "user"
// debe tener un nuevo atributo "company" que tenga como valor el nombre de la
// dicha "company". Los "users" deben ordenarse de acuerdo con sus edad
// (de mayor a menor).

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the "companies" variable and grouping
// all "users" of all "companies" in a single table. Each "user"
// must have a new attribute "company" having for value the name of the "company"
// to which it belongs. The "users" must be sorted according to their
// age (from oldest to youngest)
