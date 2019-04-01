export  {}
let message = "Hello world";
console.log(message);

let x  = 10;
const y = 20;

let sum;
const title = "typescript dodo";

let isBeginner:boolean = true;
let total : number = 0;
let name :string = 'oğan';

let sentence : string = `My name is ${name}`;
console.log(sentence);

//VARIABLES
let n :null = null;
let u :undefined = undefined;

let isNew :boolean = null;
let myName: string = undefined;

let list1 : number[] = [1,2,3];
let list2 : Array<number> = [1,2,3];

list1.forEach(element => {
    console.log(element)
});



let person1 : [string,number] = ["chr",1];

enum Color {red = 1,green,blue}

let c : Color = Color.blue;

console.log(c);

let randomValue : any = 10;
randomValue = true;
randomValue = "ttt";

console.log(randomValue);

let myVariable : unknown = 10;

if(hasName(myVariable)){
    console.log(myVariable.name);
}

function hasName(obj: any): obj is{ name:string } {
    return !!obj &&
    typeof obj === "object" &&
    "name" in obj
}

//(myVariable as string).toUpperCase();

let a;
a = 10;
a = true;

let b = 20;

let multitype : number | boolean;
multitype = 20;
multitype = false;

//FUNCTIONS

function add(nu1:number, nu2?:number):number
{
    if(nu2)
    {
        return nu1 + nu2;
    }
    else{
        return nu1;        
    }
  
}

console.log(add(1,2));
console.log(add(5));
//default parameter sample
function add2(nu1:number, nu2:number = 10):number
{
     return nu1 + nu2;
    
}
console.log(add2(5));


//INTERFACES

//interface yazmadan önce aşağıdaki örnekte fullname metodu
//person tipinde bir değişken alıyor. istersek tüm örnekleri 
//bu şekilde yazabiliriz, ama kodun okunurluluğu ve yönetimi
//zaman içinde zorlaşacaktır. O yüzden interface kavramı typescript
//içine gelir. İnterface vasıtası ile bu nesneleri yeniden yazmak
//daha kolay hale gelir.
function fullName(person:{firstName:string, lastName:string}){
    console.log(`${person.firstName + " " + person.lastName}`)
}

let p = {
    firstName : "bruce",
    lastName : "lee"
}

fullName(p);

// interface yazalım
interface Person {
    firstName : string;
    lastName : string;    
}
function fullNameWithInterface(p:Person):any{
   return console.log(`${p.firstName + " " + p.lastName}`)
}
let p2 = {
    firstName : "hakan",
    lastName : "taşıyan"
}
fullNameWithInterface(p2);
/*
fullName(firstName : string, lastName:string): string {
        return `${firstName + lastName}`;
    }
*/

//Class ve access modifiers
//bunu diğer typescipt örneğine taşıyorum
