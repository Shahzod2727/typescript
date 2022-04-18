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
var Person = /** @class */ (function () {
    // private _lastName: string;
    function Person(age, firstName) {
        this._age = age;
        this._firstName = firstName;
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            if (theAge <= 0 || theAge >= 200) {
                throw new Error("The age is invalid");
            }
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person(10, "Salom");
console.log(person.age);
