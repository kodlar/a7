class Employee{
    name : string;
    constructor(name:string){
        this.name = name;
    }
    greet(){
        console.log(`Hi ${this.name} !`);
    }
}

let emp1 = new Employee("testere");
emp1.greet();

class Manager extends Employee{
    constructor(managerName:string){
        super(managerName);
    }
}

let man1 = new Manager("ali");
man1.greet();