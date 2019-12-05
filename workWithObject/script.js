let person = {
    name: 'Faridun',
    surname: 'Christansen',
    age: 23
};

delete person.name;

console.log(person);

for (let item in person) {
    console.log(item + ' - ' + person[item]);
}

console.log(Object.keys(person).length);

// Object-oriented Programming
let soldier = {
    health: 400,
    armor: 100,
    attack: 100
};

let John = {
    health: 250
};

John.__proto__ = soldier; // тут мы говорим, что John прототипируется (наследуются) от soldier
console.log(John);
console.log('John armor = ' + John.armor + ', and his attack equalse: ' + John.attack);