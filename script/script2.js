//Получение массива из парных чисел общего массива
'use strict';
function getEven(arr){
  if(arr.length === 0){
    return '';
  }
  else{
    let getEvenArr = arr.filter((item) => item%2 === 0);
    return getEvenArr;
  }
}

