var fruits = ['Яблоко', 'Банан'];

console.log(fruits.length);


var last = fruits[fruits.length - 1];
console.log(last);

fruits.forEach(function(item, index, array) {
  console.log(item, index);
});