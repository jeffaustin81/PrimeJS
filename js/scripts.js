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
  var primeArray = [];

  for (number of numberList) {
    var count = 0;
    for (var prime = 2; prime <= number; prime++) {
      if (number % prime === 0){
        count ++;
      }
    }
    if (count === 1){
      primeArray.push(number);
    }
  }
  return primeArray;

};

$(document).ready(function() {
  $('form#prime').submit(function(event) {
    var number = parseInt($('input#number').val());
    var result = primeGenerator(number);

    $('.number').empty();
    $('.prime_numbers').empty();

    $('.number').text(number);
    $('.prime_numbers').text(result);

    $('#result').show();
    event.preventDefault();
  })
});
