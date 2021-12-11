import {cleanConsole, createAll} from './data';
import {exampleOne} from './example-1';
// A copy is saved and not the original so that it
// does not affect the other exercises
const companies = [...createAll()];

cleanConsole(3, companies);

const exampleThree = (companies) => {
  return companies.reduce((reducerCompany, company) => {
    if (reducerCompany) {
      if (company.name.charAt(0) !== company.name.charAt(0).toUpperCase()) {
        return false;
      }

      return company.users.reduce((reducerUser, user) => {
        if (reducerUser) {
          const firstNameValidation = user.firstName.charAt(0) !== user.firstName.charAt(0).toUpperCase();
          const lastNameValidation = user.lastName.charAt(0) !== user.lastName.charAt(0).toUpperCase();

          if (firstNameValidation || lastNameValidation) {
            return false;
          }
        }

        return reducerUser;
      }, true);
    }

    return reducerCompany;
  }, true);
};

console.log('---- EXAMPLE 3 --- ', exampleThree(exampleOne(companies)));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos
// "firstName" y "lastName" de "users" están en mayúsculas.
// Debes probar la operación de esta función importando la función creada
// en el "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for "example-1.js"
