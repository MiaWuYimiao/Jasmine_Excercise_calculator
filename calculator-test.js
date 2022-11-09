
it('should calculate the monthly rate correctly', function () {
  const values = {amount : 200000, years : 30, rate : 0.05};
  expect(calculateMonthlyPayment(values)).toEqual('1073.64');
});


it("should return a result with 2 decimal places", function() {
  const values = {amount : 10043, years : 8, rate : 0.058};
  expect(calculateMonthlyPayment(values).split(".")[1]?.length).toEqual(2);
});

/// etc
