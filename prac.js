const arr =[1,2,3];
let addarr = 4;
console.log([...arr,addarr]);


class Obj{
    constructor(name,age){
       this.name=name;
       this.age=age;
    }
    show(){
        return `name: ${this.name}, age: ${this.age}`
    }
}

let j1 = new Obj('pavan',18);
console.log(j1.show())

fetch(data)