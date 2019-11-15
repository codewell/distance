const distance = require('../src');

test('Distance between (1, 1), and (4, 5) is 5', () => {
  expect(distance({ x: 1, y: 1 }, { x: 4, y: 5 }))
    .toBe(5);
});

test('Distance between (0, 0), and (0, 0) is 0', () => {
  expect(distance({ x: 0, y: 0 }, { x: 0, y: 0 }))
    .toBe(0);
});

/**
 * Wrong types
 */
test('Passes strings should throw error', () => {
  expect(() => {
    distance({ x: '1', y: 1 }, { x: 4, y: 5 })
  })
    .toThrow();
});

test('Passes objects should throw error', () => {
  expect(() => {
    distance({ x: 1, y: '1' }, { x: 4, y: 5 })
  })
    .toThrow();
});

test('Passes objects should throw error', () => {
  expect(() => {
    distance({ x: 1, y: 1 }, { x: () => { }, y: 5 })
  })
    .toThrow();
});

test('Passes objects should throw error', () => {
  expect(() => {
    distance({ x: 1, y: 1 }, { x: 4, y: [] })
  })
    .toThrow();
});