import test from 'ava';
import hardMapBy from '../hardMapBy';

test('should return tree with iteratee applied to items that satisfy predicate', (t) => {
  const input = {
    value: 5,
    children: [
      {
        value: 10,
        children: [],
      },
    ],
  };
  const expected = {
    value: 5,
    children: [
      {
        value: 20,
      },
    ],
  };
  const result = hardMapBy(
    x => x.value >= 10,
    x => ({ value: x.value * 2 }),
    input,
  );
  t.deepEqual(result, expected);
});

test('should work with an array', (t) => {
  const input = [{
    value: 5,
    children: [
      {
        value: 10,
        children: [],
      },
    ],
  }];
  const expected = [{
    value: 5,
    children: [
      {
        value: 20,
      },
    ],
  }];
  const result = hardMapBy(
    x => x.value >= 10,
    x => ({ value: x.value * 2 }),
    input,
  );
  t.deepEqual(result, expected);
});

test('should work with currying', (t) => {
  const input = {
    value: 5,
    children: [
      {
        value: 10,
        children: [],
      },
    ],
  };
  const expected = {
    value: 5,
    children: [
      {
        value: 20,
      },
    ],
  };
  const mapDoubleDigits = hardMapBy(x => x.value >= 10);
  const result = mapDoubleDigits(
    x => ({ value: x.value * 2 }),
    input,
  );
  t.deepEqual(result, expected);
});
