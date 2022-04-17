// let abc:boolean = true;

// let firstname:string;

// let a:number;

// let numarry:number[] = [1,8,9]

// let luboy:any[] = ['Salom Dunyo',123,true]

// enum Color {Red=0,Yellow=1,Green=2}

// let textColor:Color =Color.Red;

// let city;

// city = 'Toshkent';

// city = (city as string).toLocaleLowerCase();

// 6 - dars

// let log = function (message) {
//   console.log(message);
// };

// let dod = (message) =>{
//     console.log(message)
// }

// let dod = () => console.log();

// 7-Dars. TypeScriptda interfeyslar.

// interface Shape{
//     x:number;
//     y:number;
// }

// function drawShape(shape:Shape){
//   console.log(shape.x.toString());
//   console.log(shape.y.toString())
// }

// let shape2: Shape;
// shape2 = {x:10,y:20};

// drawShape(shape2)


// 1) example;

// interface IUser {
//   id: number;
//   name: string;
// }



// let employee: IUser = {
//   id: 1,
//   name: "Tom",
// };


// console.log("id: ", employee.id);
// console.log("name: ", employee.name);

// 2) example;


// interface IUser {
//     id: number;
//     name: string;
// }
// let employee: IUser = {
     
//     id: 1, 
//     name: "Alice"
// }
 
// function printUser(user: IUser): void {
 
//     console.log("id: ", user.id);
//     console.log("name: ",  user.name)
// }
 
// printUser(employee);



// 3) example;


interface IUser {
    id: number;
    name: string;
}
function buildUser(userId: number, userName: string): IUser {
 
    return { id: userId, name: userName };
}
 
let newUser = buildUser(2, "Bill");
console.log("id: ", newUser.id);
console.log("name: ", newUser.name);



