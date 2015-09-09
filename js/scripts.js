var primeGenerator = function(number) {

  var end = 10001;
  var primeCount = 0;
  var number1 = 1;
  var arrayOfPrimes = [];

  while (number1 < number) {
    var count = 0;
    for (var i = 1; i <= Math.ceil(Math.sqrt(number1)); i+=2) {
      if (number1 % i === 0){
        count ++;
      }
    }
    if (count === 1){
      primeCount++;
      arrayOfPrimes.push(number1);
    }
    number1+=2;
  }
  return arrayOfPrimes;

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
