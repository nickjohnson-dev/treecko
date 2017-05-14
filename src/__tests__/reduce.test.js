import test from 'ava';
import reduce from '../reduce';

test('should reduce the items in the tree to a single value, in a depth first fashion', (t) => {
  const data = {
    value: 5,
    children: [
      {
        value: 10,
        children: [],
      },
    ],
  };
  const expected = 15;
  const result = reduce(
    (acc, cur) => acc + cur.value,
    0,
    data,
  );
  t.deepEqual(result, expected);
});

test('should work with an array', (t) => {
  const data = [{
    value: 5,
    children: [
      {
        value: 10,
        children: [],
      },
    ],
  }];
  const expected = 15;
  const result = reduce(
    (acc, cur) => acc + cur.value,
    0,
    data,
  );
  t.deepEqual(result, expected);
});

test('should work currying', (t) => {
  const data = [{
    value: 5,
    children: [
      {
        value: 10,
        children: [],
      },
    ],
  }];
  const expected = 15;
  const sumReduce = reduce((acc, cur) => acc + cur.value);
  const result = sumReduce(
    0,
    data,
  );
  t.deepEqual(result, expected);
});
