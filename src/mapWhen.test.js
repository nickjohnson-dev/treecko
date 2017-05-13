import test from 'ava';
import mapWhen from './mapWhen';

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
        children: [],
      },
    ],
  };
  const result = mapWhen(
    x => x.value >= 10,
    x => ({ ...x, value: x.value * 2 }),
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
        children: [],
      },
    ],
  }];
  const result = mapWhen(
    x => x.value >= 10,
    x => ({ ...x, value: x.value * 2 }),
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
        children: [],
      },
    ],
  };
  const mapWhenDoubleDigits = mapWhen(x => x.value >= 10);
  const result = mapWhenDoubleDigits(
    x => ({ ...x, value: x.value * 2 }),
    input,
  );
  t.deepEqual(result, expected);
});
