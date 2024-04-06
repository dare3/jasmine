it('should calculate the monthly rate correctly', function() {
    // ...
    const values = {
      amount: 1000,
      years: 2,
      rate: 1.5
    };
    expect(calculateMonthlyPayment(values)).toEqual('42.32');
  });
  
  
  it("should return a result with 2 decimal places", function() {
    const values = {
      amount: 50054,
      years: 9,
      rate: 4.5
    };
    expect(calculateMonthlyPayment(values)).toEqual('564.49');
  });
  
  it("should handle terribly high interest rates", function() {
    const values = {
      amount: 59000,
      years: 12,
      rate: 105
    };
    expect(calculateMonthlyPayment(values)).toEqual('5162.53');
  });
  
  /// etc