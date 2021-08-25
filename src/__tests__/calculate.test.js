import { isNumber, calculate } from '../logic/calculate';

describe('isNumber', () => {
  test('Shuold return true if the input is a number', () => {
    expect(isNumber('5')).toBeTruthy();
  });

  test('Should return false if  the input value is not a number', () => {
    expect(isNumber('xxx')).toBeFalsy();
  });
});

describe('should update the object with button name', () => {
  it('should return null for all the object items if button name was `AC`', () => {
    const obj = {
      total: null,
      next: null,
      operation: '+',
    };

    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should return updated object if button name was `=`', () => {
    const obj = {
      total: 2,
      next: 3,
      operation: '+',
    };

    expect(calculate(obj, '=')).toEqual({
      total: '5',
      next: null,
      operation: null,
    });
  });

  it('should return add `-` to positive numbers and vice versa', () => {
    const obj = {
      next: -3,
    };

    expect(calculate(obj, '+/-')).toEqual({
      next: '3',
    });
  });
});
