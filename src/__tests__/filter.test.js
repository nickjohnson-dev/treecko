import test from 'ava';
import filter from '../filter';

test('should return tree with only items that satisfy predicate', (t) => {
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
  const result = filter(x => x.age < 100, data);
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
  const result = filter(x => x.age < 100, data);
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
  const filterWithinDate = filter(x => x.age < 100);
  const result = filterWithinDate(data);
  t.deepEqual(result, expected);
});
