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
  return array.unshift(element);
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
  return array2
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  var array2 = array.pop();
  return array2;
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1);
}