// const regex = /^.ery/gm;
// const str = `very nice place, 
// very pleasant environment`;

// //methode on regex
// console.log(regex.test(str));
// console.log( regex.exec(str));
// //methods on strings
// console.log(str.replace(regex, "VERY"));
// console.log(str.match(regex));
// for (let i of str.matchAll(regex)){
//     console.log(i);
// };
// console.log(str.search(regex));
// console.log(str.split(regex));


//Email Regex
const regex = /^(\w[^!@#\$%\^&\*\.]{1,20})\d{0,5}@\w{1,10}\.\w{2,3}/g
const Email = "mohitlenka865@gvpce.ac.in"
console.log(regex.test(Email));