import test from 'ava';
import reduce from '../reduce';

test('should reduce the items in the tree to a single value, in a depth first fashion', (t) => {
  const data = {
    value: 'a',
    children: [
      {
        value: 'b',
        children: [
          {
            value: 'c',
            children: [],
          },
        ],
      },
      {
        value: 'd',
        children: [],
      },
    ],
  };
  const expected = 'abcd';
  const result = reduce(
    (acc, cur) => `${acc}${cur.value}`,
    '',
    data,
  );
  t.deepEqual(result, expected);
});

test('should work with an array', (t) => {
  const data = [{
    value: 'a',
    children: [
      {
        value: 'b',
        children: [
          {
            value: 'c',
            children: [],
          },
        ],
      },
      {
        value: 'd',
        children: [],
      },
    ],
  }];
  const expected = 'abcd';
  const result = reduce(
    (acc, cur) => `${acc}${cur.value}`,
    '',
    data,
  );
  t.deepEqual(result, expected);
});

test('should work currying', (t) => {
  const data = {
    value: 'a',
    children: [
      {
        value: 'b',
        children: [
          {
            value: 'c',
            children: [],
          },
        ],
      },
      {
        value: 'd',
        children: [],
      },
    ],
  };
  const expected = 'abcd';
  const sumReduce = reduce((acc, cur) => `${acc}${cur.value}`);
  const result = sumReduce(
    '',
    data,
  );
  t.deepEqual(result, expected);
});
