import test from 'ava';
import reject from '../reject';

test('should return tree without items that satisfy predicate', (t) => {
  const data = {
    age: 25,
    children: [
      {
        age: 40,
        children: [],
      },
      {
        age: 150,
        children: [],
      },
    ],
  };
  const expected = {
    age: 25,
    children: [
      {
        age: 40,
        children: [],
      },
    ],
  };
  const result = reject(x => x.age > 100, data);
  t.deepEqual(result, expected);
});

test('should work with array', (t) => {
  const data = [
    {
      age: 40,
      children: [],
    },
    {
      age: 150,
      children: [],
    },
  ];
  const expected = [
    {
      age: 40,
      children: [],
    },
  ];
  const result = reject(x => x.age > 100, data);
  t.deepEqual(result, expected);
});

test('should work with currying', (t) => {
  const data = {
    age: 25,
    children: [
      {
        age: 40,
        children: [],
      },
      {
        age: 150,
        children: [],
      },
    ],
  };
  const expected = {
    age: 25,
    children: [
      {
        age: 40,
        children: [],
      },
    ],
  };
  const rejectOutdated = reject(x => x.age > 100);
  const result = rejectOutdated(data);
  t.deepEqual(result, expected);
});
