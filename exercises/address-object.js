import { faker } from "@faker-js/faker";

let myAddresss = {
  street: faker.location.street(),
  city: faker.location.city(),
  zipCode: faker.location.zipCode(),
};

function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}

showAddress(myAddresss);
