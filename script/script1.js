// Получение минимального элемента массива
'use strict';
function getMin(arr){
  if(arr.length === 0){
    return '';
  }
  else{
  let getMinArr = Math.min.apply(null, arr);
  return getMinArr;
  }
}

