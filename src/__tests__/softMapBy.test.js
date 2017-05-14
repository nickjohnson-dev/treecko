import test from 'ava';
import softMapBy from '../softMapBy';

test('should return tree with iteratee applied to items that satisfy predicate, preserving children', (t) => {
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
  const result = softMapBy(
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
  const result = softMapBy(
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
  const mapDoubleDigits = softMapBy(x => x.value >= 10);
  const result = mapDoubleDigits(
    x => ({ ...x, value: x.value * 2 }),
    input,
  );
  t.deepEqual(result, expected);
});
