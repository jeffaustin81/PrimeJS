describe('primeGenerator', function() {
  it("if given 2 return 2", function() {
    expect(primeGenerator(2)).to.equal(2);
  });

  it("return a range up to given number", function() {
    expect(listOfNumbers(18)).to.eql([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]);
  });

  it("if given 3 return 3", function() {
    expect(primeGenerator(3)).to.eql([3]);
  });

  it("if given 3 return 3", function() {
    expect(primeGenerator(18)).to.eql([17]);
  });

  it("if given  return 998", function() {
    expect(primeGenerator(998)).to.eql([997]);
  });
});
