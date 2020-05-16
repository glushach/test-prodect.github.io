//Получение массива объектов из общего массива объектов по значению ключа name
'use strict';
let arr = [
  {name: 'Jonny Walker', birthDate: '1995-12-17'},
  {name: 'Andrew', birthDate: '2001-10-29'},
  {name: 'Vikor', birthDate: '1998-11-09'},
  {name: 'Andrew', birthDate: '2011-05-09'},
];

function searchByName(name){
  let ArrName = [];
  for(let i = 0; i<arr.length;i++){
    if(arr[i].name === name){
      ArrName.push(arr[i]);
    }
  }
  return ArrName; 
}

