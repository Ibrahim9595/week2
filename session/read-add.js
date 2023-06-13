// import { readFileSync } from "fs";

// try {
//   // get file name
//   const filename = process.argv[2];

//   // read file
//   const numbers = readFileSync(filename, {encoding: 'utf-8'});

//   // add numbers in file
//   let res = 0;
//   numbers.split(" ").forEach((value) => {
//     res += parseInt(value);
//   });

//   // print result
//   console.log(`The result is ${res}`);
// } catch (error) {
//   console.log(error);
// }

const [_, __, ...numbers] = process.argv

const res = numbers.reduce((acc, curr) => {
    return acc + parseInt(curr)
}, 0)


console.log(res)