var chocolateBars = ['snickers',
'hundred grand',
'kitkat',
'skittles',
];

function addElementToBeginningOfArray(array,element) {
  var array2 = [element,...array];
  return array2;
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array = array.unshift(element);
  return array
}

function addElementToEndOfArray(array,element) {
  var array2 = [...array,element];
  return array2;
}

function destructivelyAddElementToEndOfArray(array,element) {
  return array.push(element);
}

function accessElementInArray(array,index){
  console.log(array[index]);
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  var array2 = array.shift();
  return array2;
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
 array = array.slice(0, array.length - 1);
  return array;
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1);
}