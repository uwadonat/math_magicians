import operate from './operate';
describe('operate', () => {
    test('6 + 3 should return 9', () => {
        expect(operate(6, 3,'+')).toBe('9');
    });

    test('6 + 3 should return 9', () => {
        expect(operate(6, 3,'+')).toBe('9');
    });

    test('6 - 3 should return 3', () => {
        expect(operate(6, 3,'-')).toBe('3');
    });

    test('6 x 3 should return 18', () => {
        expect(operate(6, 3,'x')).toBe('18');
    });

    test('6 ÷ 3 should return 2', () => {
        expect(operate(6, 3,'÷')).toBe('2');
    });

    test('6 % 4 should return 2', () => {
        expect(operate(6, 4,'%')).toBe('2');
    });

    test('Should throw an error if a wrong operator is used', () => {
        expect(() => operate(6, 3, 'q')).toThrowError(/Unknown operation/);
      });
});