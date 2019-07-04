document.write('hello')

function Animal(age){
    this.age = age
}

Animal.prototype.getAge = function(){
    return this.age + ", getAge, prototype"
}

Animal.prototype.eat = function(){
    return this.age + ", eat, prototype"
}

function Dog(name, age) {
    Animal.call(this, age);
    this.name = name;
}

// Dog.prototype['__proto__'] = Animal.prototype;
Dog.prototype = new Animal()

Dog.prototype.getAge = function () {
    return this.age + ", dog, prototype"
}

function Cat(){

}

Cat.prototype = new Animal()

let d1 = new Dog('d1', 12)
let c1 = new Cat()
console.log(d1.getAge())
console.log(d1.eat())
console.log(Dog.prototype.constructor === d1.__proto__.constructor)
console.log(c1.eat === d1.eat)
