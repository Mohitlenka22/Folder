//Strings
// console.log("JavaScript!!");
// const string = "Len,ovo";
// let str2 ="Ideapad"
//String methods & Properties
// console.log(string);
// console.log(string.concat(str2));
// console.log(string.length);
// console.log(string.toUpperCase());
// console.log(string.toLowerCase());
// console.log(string.indexOf('e'));
// console.log(string.lastIndexOf('e'));
// console.log(string.includes('e'));
// console.log(string.startsWith('L'));
// console.log(string.endsWith('L'));
// console.log(string.substring(1,3));
// console.log(string.substr(1,3));
// console.log(string.slice(1,3));
// console.log(string.replace('e','i'));
// console.log(string.charAt(2));
// conversion pf string into array
// console.log(string.split(','));
// console.log(string[2]);


// Arrays

// let arr = [1,2,3,4,6,5];
// console.log(arr.sort());
// // let arr1 = new Array(1,2,3,4,5,7);
// console.log(arr);
// console.log(arr.length);
// console.log(arr.reverse());
// // push,pop,shift,unshift
// arr.push(10);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift(10);
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.splice(0,4);
// console.log(arr);

// array =[1,2,3,4];
// for (let i = 0; i < array.length; i++) {
//     const e= array[i];
//     console.log(e);
//     console.log(array.join('$'));
    
// }


// const time = () => {
//     const date = new Date()
//     d1 = date.getHours();
//     d2 = date.getMinutes();
//     d3 = date.getSeconds();
//     console.log(`${d1}:${d2}:${d3}`)
//     document.getElementById('time').innerHTML=`${d1}:${d2}:${d3}`;
// }
// setInterval(time,1000);
// // const p=[10,20,30];
// // p.forEach(data => {
// //     console.log(data);
// // });


// // let a=5,b=4;
// // [a,b]=[b,a];
// // console.log(a,b);

// const persons = [
//     person1 = {
//         name: 'harry',
//         age: 10
//     },
//     person2 = {
//         name: 'harry2',
//         age: 12
//     },

// ];
// const [{name,age}]=persons;
// console.log(age);
// persons.map((person) => {
//     console.log(person.name);
//     console.log(person.age);
// });

// persons.forEach((person) => {
//     console.log(`#${person.name}`)
// })
// let xhr= new XMLHttpRequest();
// xhr.open('GET',,true);
// xhr.onprogress(()=>{

// })
// xhr.send();

// let z =Math;
// console.log(z);
// console.log(z.PI);
// console.log(z.E);
// console.log(z.sin(z.PI/2));
// console.log(z.max(1,2,3,4,6));
// console.log(z.abs(-5));
// console.log(z.ceil(3/5));


// Creating,replacing,selecting DOM elements

// let Element = document.createElement('h1');
// console.log(Element);
// Element.innerHTML='this';
// let doc = document.getElementById('doc');
// doc.appendChild(Element);

// let elem2 = document.createElement('p');
// elem2.innerHTML='lorem34';
// doc.replaceChild(elem2,Element);
// doc.removeChild(elem2);
// // doc.className='para';
// doc.setAttribute('class','para');
// console.log(doc);
// let con = document.querySelector('.con');
// console.log(con.childNodes);
// console.log(con.children[2]);



// const xhr =  new XMLHttpRequest(); //instanstaiting xhr object

// xhr.open('GET','https://jsonplaceholder.typicode.com/todos',true);

// xhr.onload=function(){return console.log(xhr.responseText)};

// xhr.send();



// fetch('data'
// ).then(res=>console.log(res.json()))
// .then(json=> console.log(json))
// .catch(e=>console.log(e));


// class Student{
//    constructor(name,roll){
//       this.name=name,
//       this.roll=roll
//    } 
//    attend(){
//        return `Rollno:${this.roll} present`
//    }
//    static add(a ,b){
//        return a+b
//    }
// };


// let s1 = new Student('harry',1)
// console.log(s1)
// console.log(s1.attend())
// console.log(Student.add(1,2))

// class teach extends Student {
//     constructor(name,roll,sub){
//         super(name,roll)
//         this.sub=sub
//     }
// }


const url = './data.txt';
fetch(url).then(response=>console.log(response.text()))
.then(data=>console.log(data));


