
describe('calculator', function () {
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 10000, years: 8, rate: 5})).toEqual('126.60');
});

it("should return a result with 2 decimal places", function() {
  const payement = calculateMonthlyPayment({amount: 10000, years: 8, rate: 5})
  const decilamPlace = (payement.toString().split('.')[1] || []).length;
  expect(decilamPlace).toEqual(2);
});

it("should handle terribly high interest rates", function() {
  expect(calculateMonthlyPayment({amount: 10000, years: 8, rate: 100})).not.toEqual('833.33');
});
});

