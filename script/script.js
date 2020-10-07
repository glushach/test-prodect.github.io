'use strict';
//Получение минимального элемента массива
function getMin(arr){
  return Math.min(...arr);
}
// console.log(getMin([2,4,5,79,4,1,16]));

//Получение массива парных чисел из входного массива
function getEven(arr){
  return arr.filter((item) => item%2 === 0);
}
// console.log(getEven([2,4,5,7,9,4,1,16]));

//Поиск объектов в массиве по заданному ключу
const arr = [
  {name: 'Jonny Walker', birthDate: '1995-12-17'},
  {name: 'Andrew', birthDate: '2001-10-29'},
  {name: 'Vikor', birthDate: '1998-11-09'},
  {name: 'Andrew', birthDate: '2011-05-09'},
];

function searchByName(name) {
  return arr.filter((item) => item.name == name);
}
// console.log(searchByName('Andrew'));

