import {cleanConsole, createAll} from './data';
// A copy is saved and not the original so that it
// does not affect the other exercises
const companies = [...createAll()];

cleanConsole(7, companies);

const getCompanyNameById = (companies, idCompany) => {
  const company = companies.find((company) => company.id === idCompany);

  if (company) {
    return company.name;
  }
  return '';
};

const deleteCompanyById = (companies, idCompany) => {
  const newsCompanies = [...companies];
  const companyIndex = newsCompanies.findIndex((company) => company.id === idCompany);

  if (companyIndex !== -1) {
    newsCompanies.splice(companyIndex, 1);
  }
  return newsCompanies;
};

// NOTA: Creo entender el concepto y diferencia entre PATCH y PUT
// pero no se me ocurrio otro modo de implementarlo en ejercicio
// sin realizar un request
const patchCompanyById = (companies, idCompany, body) => {
  const newsCompanies = [...companies];
  const companyIndex = newsCompanies.findIndex((company) => company.id === idCompany);

  if (companyIndex !== -1) {
    Object.keys(body).forEach((bodyKey) => {
      if (bodyKey !== 'users') {
        newsCompanies[companyIndex][bodyKey] = body[bodyKey];
      }
    });
  }
  return newsCompanies;
};

const getLastId = (elements) => {
  const orderElements = elements.sort((a, b) => b.id - a.id);

  if (orderElements.length > 0) {
    return orderElements[0].id + 1;
  }
  return 0;
};

const addUserByCompanyId = (companies, idCompany, body) => {
  const newsCompanies = [...companies];
  const companyIndex = newsCompanies.findIndex((company) => company.id === idCompany);

  if (companyIndex !== -1) {
    newsCompanies[companyIndex].users.push({
      ...body,
      id: getLastId(newsCompanies[companyIndex].users),
    });
    newsCompanies[companyIndex].usersLength++;
  }
  return newsCompanies;
};

const putCompanyById = (companies, idCompany, body) => {
  const newsCompanies = [...companies];
  const companyIndex = newsCompanies.findIndex((company) => company.id === idCompany);

  if (companyIndex !== -1) {
    newsCompanies[companyIndex] = {
      ...newsCompanies[companyIndex],
      ...body,
      users: newsCompanies[companyIndex].users,
    };
  }
  return newsCompanies;
};

const deleteUserByCompanyId = (companies, idCompany, idUser) => {
  const newsCompanies = [...companies];
  const companyIndex = newsCompanies.findIndex((company) => company.id === idCompany);

  if (companyIndex !== -1) {
    const userIndex = newsCompanies[companyIndex].users.findIndex((user) => user.id === idUser);

    if (userIndex !== -1) {
      newsCompanies[companyIndex].users.splice(userIndex, 1);
      newsCompanies[companyIndex].usersLength--;
    }
  }
  return newsCompanies;
};

const patchUserByCompanyId = (companies, idCompany, idUser, body) => {
  const newsCompanies = [...companies];
  const companyIndex = newsCompanies.findIndex((company) => company.id === idCompany);

  if (companyIndex !== -1) {
    const userIndex = newsCompanies[companyIndex].users.findIndex((user) => user.id === idUser);

    if (userIndex !== -1) {
      Object.keys(body).forEach((bodyKey) => {
        newsCompanies[companyIndex].users[userIndex][bodyKey] = body[bodyKey];
      });
    }
  }
  return newsCompanies;
};

const putUserByCompanyId = (companies, idCompany, idUser, body) => {
  const newsCompanies = [...companies];
  const companyIndex = newsCompanies.findIndex((company) => company.id === idCompany);

  if (companyIndex !== -1) {
    const userIndex = newsCompanies[companyIndex].users.findIndex((user) => user.id === idUser);

    if (userIndex !== -1) {
      newsCompanies[companyIndex].users[userIndex] = {
        ...newsCompanies[companyIndex].users[userIndex],
        ...body,
      };
    }
  }
  return newsCompanies;
};

const moveUserBeetwenCompanies = (companies, idStartCompany, idEndCompany, idUser) => {
  let newsCompanies = [...companies];
  const startCompany = newsCompanies.find((company) => company.id === idStartCompany);

  if (startCompany) {
    const user = startCompany.users.find((user) => user.id === idUser);

    if (user) {
      newsCompanies = deleteUserByCompanyId(newsCompanies, idStartCompany, idUser);
      newsCompanies = addUserByCompanyId(newsCompanies, idEndCompany, user);
    }
  }
  return newsCompanies;
};

console.log('---- EXAMPLE 7 part 1 --- ', getCompanyNameById(companies, 5));
console.log('---- EXAMPLE 7 part 2 --- ', deleteCompanyById(companies, 5));
console.log('---- EXAMPLE 7 part 3 --- ', patchCompanyById(companies, 5, {name: 'Scandal', users: []}));
const newUser = {firstName: 'Juan', lastName: 'Delgado', age: 35, car: true};
console.log('---- EXAMPLE 7 part 4 --- ', addUserByCompanyId(companies, 5, newUser));
console.log('---- EXAMPLE 7 part 5 --- ', putCompanyById(companies, 4, {name: 'Facebook', users: []}));
console.log('---- EXAMPLE 7 part 6 --- ', deleteUserByCompanyId(companies, 5, 10));
console.log('---- EXAMPLE 7 part 7 --- ', patchUserByCompanyId(companies, 5, 11, {lastName: 'Valencia'}));
console.log('---- EXAMPLE 7 part 8 --- ', putUserByCompanyId(companies, 5, 12, {lastName: 'Lopez'}));
console.log('---- EXAMPLE 7 part 9 --- ', moveUserBeetwenCompanies(companies, 0, 1, 10));
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Parte 1: Crear una función tomando como parámetro un "id" de "company" y
// devolviendo el nombre de esta "company".

// Parte 2: Crear una función tomando como parámetro un "id" de "company" y
// quitando la "company" de la lista.

// Parte 3: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PATCH (como con una llamada HTTP) en todos los
// atributos de esta "company" excepto en el atributo "users".

// Parte 4: Crear una función tomando como parámetro un "id" de "company" y un
// nuevo "user" cuyo el apelido es "Delgado", el nombre "Juan", de 35 años y
// dueño de un carro. El nuevo "user" debe agregarse a la lista de "users" de este
// "company" y tener un "id" generado automáticamente. La función también debe modificar
// el atributo "usersLength" de "company".

// Parte 5: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PUT (como con una llamada HTTP) en esta "company" excepto
// en el atributo "users".

// Parte 6: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user". La función debe quitar este "user" de la lista de "users"
// de "company" y cambiar el atributo "usersLength" de "company".

// Parte 7: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PATCH (como con una llamada HTTP) en este
// "user".

// Parte 8: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PUT (como con una llamada HTTP) en este
// "user".

// Parte 9: Crear una función tomando como parámetro dos "id" de "company" y
// un "id" de "user". La función debe permitir que el user sea transferido de la
// primera "company" a la segunda "company". El atributo "usersLength" de cada
// "company" debe actualizarse.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Part 1: Create a function taking as parameter an "id" of "company" and
// returning the name of this "company".

// Part 2: Create a function taking as parameter an "id" of "company" and
// removing the "company" from the list.

// Part 3: Create a function taking as a parameter an "id" of "company" and
// allowing to make a PATCH (as with an HTTP call) on all
// attributes of this "company" except on the "users" attribute.

// Part 4: Create a function taking as parameter an "id" of "company" and a
// new "user" whose name is "Delgado", the first name "Juan", aged 35 and
// a car. The new "user" must be added to the "users" list of this
// "company" and have an automatically generated "id". The function must also modify
// the "usersLength" attribute of "company".

// Part 5: Create a function taking as parameter an "id" of "company" and
// allowing to make a PUT (as with an HTTP call) on this "company" except
// on the "users" attribute.

// Part 6: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user". The function must remove this "user" from the list of "users"
// from "company" and change the attribute "usersLength" from "company".

// Part 7: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PATCH (as with an HTTP call) on this
// "user".

// Part 8: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PUT (as with an HTTP call) on this
// "user".

// Part 9: Create a function taking as parameter two "id" of "company" and
// an "id" of "user". The function must allow the user to be transferred as a parameter
// from the 1st "company" to the 2nd "company". The "usersLength" attribute of each
// "company" must be updated
