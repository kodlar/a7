"use strict";
exports.__esModule = true;
var message = "Hello world";
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = "typescript dodo";
var isBeginner = true;
var total = 0;
var name = 'oğan';
var sentence = "My name is " + name;
console.log(sentence);
//VARIABLES
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
list1.forEach(function (element) {
    console.log(element);
});
var person1 = ["chr", 1];
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 3] = "blue";
})(Color || (Color = {}));
var c = Color.blue;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = "ttt";
console.log(randomValue);
var myVariable = 10;
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
//(myVariable as string).toUpperCase();
var a;
a = 10;
a = true;
var b = 20;
var multitype;
multitype = 20;
multitype = false;
//FUNCTIONS
function add(nu1, nu2) {
    if (nu2) {
        return nu1 + nu2;
    }
    else {
        return nu1;
    }
}
console.log(add(1, 2));
console.log(add(5));
//default parameter sample
function add2(nu1, nu2) {
    if (nu2 === void 0) { nu2 = 10; }
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
function fullName(person) {
    console.log("" + (person.firstName + " " + person.lastName));
}
var p = {
    firstName: "bruce",
    lastName: "lee"
};
fullName(p);
function fullNameWithInterface(p) {
    return console.log("" + (p.firstName + " " + p.lastName));
}
var p2 = {
    firstName: "hakan",
    lastName: "taşıyan"
};
fullNameWithInterface(p2);
/*
fullName(firstName : string, lastName:string): string {
        return `${firstName + lastName}`;
    }
*/
//Class ve access modifiers
//bunu diğer typescipt örneğine taşıyorum
