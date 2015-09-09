var primeGenerator = function() {

  var end = 10001;
  var primeCount = 0;
  var number = 2;

  while (primeCount < 10001) {
    var count = 0;
    for (var i = 1; i <= (number/2); i++) {
      if (number % i === 0){
        count ++;
      }
    }
    if (count === 1){
      primeCount++;
    }
    number++;
  }
  return number - 1;

};
