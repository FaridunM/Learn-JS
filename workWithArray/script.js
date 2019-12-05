let cities = ['Dushanbe', 'Moscow', 'Berlin', 'SanFrancisco', 'New-York'];
// console.log(cities.length);

cities.pop(); // removes element from the back
cities.shift(); // remove element from the front

cities.push('Lesbos'); // add element from the back
cities.unshift('Rome'); // add element from the front

// wbrk forEach
cities.forEach(function (item, i, goroda) {
    console.log(i + '. ' + item + ' из (' + goroda + ')');
});

// Excessive(перебор) keys of array
for (let key in cities) {
    console.log(key);
}

// Excessive(перебор) values of array
for (let value of cities) {
    console.log(value);
}

// work with split and join, methods for wor with arrays. So interested tools.
let namesOfCities = cities.join(', '),
    myCities = namesOfCities.split(', ');
console.log(namesOfCities);
console.log(myCities);

// Sorting by alphabet and num
let agesMyFriends = [19, 21, 23, 25, 29, 31];
sortingCities = cities.sort();
sortingAges = agesMyFriends.sort(comparingNums);
console.log(sortingCities);
console.log(sortingAges);

function comparingNums(a, b) {
    return a-b;
}

// Work with filter method
let nums = [1, 3, 5, 7, 9],
    filterResult = nums.filter((item) => item < 7);
console.log(filterResult);

// Work with map method
let mapResult = nums.map((item) => item * 10);
console.log(mapResult);

// Work with every and some methods
let every = nums.every(item => item < 7);
console.log(every);
let some = nums.some(item => item < 7);
console.log(some);