// class Shape {
//   private _x: number;
//   private _y: number;

//   public get x() {
//     return this._x;
//   }

//   public set x(value: number) {
//     if (value < 0) throw new Error("Test uchun");
//     this._x = value;
//   }

//   constructor(x?: number, y?: number) {
//     this._x = x;
//     this._y = y;
//   }

//   draw() {
//     console.log(this._x.toString());
//     console.log(this._y.toString());
//   }
// }

// let shape = new Shape(10, 200);

// shape.draw();

class Person {
  private _age: number;
  private _firstName: string;
  // private _lastName: string;

  constructor(age: number, firstName: string) {
    this._age = age;
    this._firstName = firstName;
  }

  public get age() {
    return this._age;
  }

  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 200) {
      throw new Error("The age is invalid");
    }
    this._age = theAge;
  }

  // public getFullName(): string {
  //     return `${this._firstName} ${this._lastName}`;
  // }
}

let person = new Person(10, "Salom");

console.log(person.age)