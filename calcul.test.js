
const Calcul = require('./sketch'); 



// basics operations

test('Addition: 5 + 10 should return 15', () => {
  expect(Calcul("5+10")).toBe(15);
});

test('Subtraction: 20 - 8 should return 12', () => {
  expect(Calcul("20-8")).toBe(12);
});

test('Multiplication: 6 * 7 should return 42', () => {
  expect(Calcul("6*7")).toBe(42);
});

test('Division: 10 / 2 should return 5', () => {
  expect(Calcul("10/2")).toBe(5);
});


// edge cases

test('Division by zero: should return "Division by 0 !"', () => {
  // Verifies the custom error message for division by zero
  expect(Calcul("10/0")).toBe("Division by 0 !");
});

test('Negative numbers: -5 + 10 should return 5', () => {
  // Checks if the logic handles negative operands correctly
  expect(Calcul("-5+10")).toBe(5);
});

test('Decimal numbers: 2.5 * 2 should return 5', () => {
  // Checks if floating point numbers are handled
  expect(Calcul("2.5*2")).toBe(5);
});

test('Large numbers: 1,000,000 * 1,000,000 should return 1,000,000,000,000', () => {
  // Verifies the engine can handle very large integer results
  expect(Calcul("1000000*1000000")).toBe(1000000000000);
});