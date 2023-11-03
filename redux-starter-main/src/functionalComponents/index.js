// // // import { compose, pipe } from "lodash/fp";

// const { indexOf } = require("lodash");

// // // let username = "                 harley  ";

// // // const trim = (name) => name.trim();

// // // const generateMessage = (message) => (name) =>
// // //   `Hello my love ${name} good will ${message}`;

// // // const toUppercasedd = (name) => name.toUpperCase();

// // // const newfunc = pipe(trim, toUppercasedd, generateMessage("Good Morning"));
// // // const resultt = newfunc(username);

// // // console.log(resultt);

// // // function multi(a) {
// // //   return function (b) {
// // //     return a * b;
// // //   };
// // // }

// // // const result1 = multi(5)(2);
// // // console.log(result1);
// // import { produce } from "immer";

// // const employee = {
// //   name: "harley",
// //   age: 32,
// //   company: { country: "canada", city: "toronto" },
// // };
// // // const newEmployee = Object.assign({}, employee, { name: "Martin" });

// // // const newEmployee = {
// // //   ...employee,
// // //   name: "mart",
// // //   company: { ...employee.company, city: "calgary" },
// // // }

// // const newEmployee = produce(employee, (draftstate) => {
// //   draftstate.name = "junior";
// //   draftstate.company.city = "calgary";
// // });

// // console.log(employee);
// // console.log(newEmployee);

// const numbers = [12, 13, 14, 15, 16];

// const index = numbers.indexOf(13);
// const addnumbers = [...numbers.slice(0, index), 50, ...numbers.slice(index)];

// console.log(addnumbers);

// const updated = numbers.map((a) => (a === 15 ? 80 : a));
// console.log(updated);

// const remove = numbers.filter((a) => a !== 14);

// console.log(remove);
import { produce } from "immer";

const book = {
  author: "Robert nyloan",
  book: {
    name: "full stack developer",
    price: "$&",
    rating: 4.6,
  },
};
const arrayofbooks = ["books1", "book2", "book3"];

const newBooks = produce(book, (bookstate) => {
  bookstate.book.rating = 4.8;
  bookstate.book.price = "$10";
});
console.log(newBooks);

const updated = arrayofbooks.map((a) => (a === "book2" ? "book4" : a));
console.log(updated);
