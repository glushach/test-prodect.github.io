//Получение массива из парных чисел общего массива
'use strict';
function getEven(arr){
  let getEvenArr = [];
  let emptyArray = '';
  
  if(arr.length === 0){
    return emptyArray;
  }

  if(arr.length > 0){
    for(let i=0; i<arr.length; i++){
      if(arr[i]%2 === 0){
        getEvenArr.push(arr[i]);
      }
    }
  }
  return getEvenArr;  
}

