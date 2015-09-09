var listOfNumbers = function(range_number) {
  var listNumbers = [];
  for (var i=2; i<=range_number;i++) {
    listNumbers.push(i);
  }
  return listNumbers;
};



var primeGenerator = function(number) {
  if (number === 2) {
    return 2;
  }

  var numberList = listOfNumbers(number);
  

  for(var prime = 2; prime < number; prime++) {
    for (number of numberList) {
      if (number % prime === 0){
        var index = numberList.indexOf(number);
        numberList.splice(index,1);
      }
    }
  }
  return numberList;

};
