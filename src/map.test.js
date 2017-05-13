import test from 'ava';
import map from './map';

test('should return tree with iteratee applied to each item', (t) => {
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
    value: 10,
    children: [
      {
        value: 20,
        children: [],
      },
    ],
  };
  const result = map(x => ({
    ...x,
    value: x.value * 2,
  }), input);
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
    value: 10,
    children: [
      {
        value: 20,
        children: [],
      },
    ],
  }];
  const result = map(x => ({
    ...x,
    value: x.value * 2,
  }), input);
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
    value: 10,
    children: [
      {
        value: 20,
        children: [],
      },
    ],
  };
  const mapDoubleValue = map(x => ({ ...x, value: x.value * 2 }));
  const result = mapDoubleValue(input);
  t.deepEqual(result, expected);
});
