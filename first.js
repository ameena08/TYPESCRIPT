var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, age, sound) {
        this.name = name;
        this.age = age;
        this.sound = sound;
    }
    Animal.prototype.makeSound = function () {
        console.log("".concat(this.name, " says ").concat(this.sound));
    };
    return Animal;
}());
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal(name, age, sound) {
        return _super.call(this, name, age, sound) || this;
    }
    return Mammal;
}(Animal));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, age, sound) {
        return _super.call(this, name, age, sound) || this;
    }
    return Bird;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, age, sound) {
        return _super.call(this, name, age, sound) || this;
    }
    return Fish;
}(Animal));
// Example usage
var elephant = new Mammal('Ellie', 10, 'trumpet');
elephant.makeSound();
var penguin = new Bird('Penny', 5, 'squawk');
penguin.makeSound();
var shark = new Fish('Sam', 3, 'chomp');
shark.makeSound();
