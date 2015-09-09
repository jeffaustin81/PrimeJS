var primeGenerator = function() {

  var end = 10001;
  var primeCount = 0;
  var number = 1;
  var arrayOfPrimes = [];

  while (primeCount < 10001) {
    var count = 0;
    for (var i = 1; i <= (number/2); i++) {
      if (number % i === 0){
        count ++;
      }
    }
    if (count === 1){
      primeCount++;
      arrayOfPrimes.push(number);
    }
    number+=2;
  }
  return number - 1;

};
