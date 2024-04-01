import { faker } from "@faker-js/faker";

// let myAddresss = {
//   street: faker.location.street(),
//   city: faker.location.city(),
//   zipCode: faker.location.zipCode(),
// };

// function showAddress(address) {
//   for (let key in address) {
//     console.log(key, address[key]);
//   }
// }

// showAddress(myAddresss);

function Address() {
    this.street = faker.location.street();
    this.city = faker.location.city();
    this.zipCode = faker.location.zipCode();
    this.showAddress = function() {
        for(let key in this) {
            if (typeof this[key] !== "function") {
                console.log(key, this[key]);
            }
        }
    }
}

const address = new Address();
address.showAddress();
