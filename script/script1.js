// Получение минимального элемента массива
'use strict';
function getMin(arr){
  let getMinArr = '';
  if(arr.length > 0){
    getMinArr = Math.min(...arr);
  }
  return getMinArr;
}


