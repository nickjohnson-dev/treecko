import test from 'ava';
import filter from '../filter';

test('should return tree with only items that satisfy predicate', (t) => {
  const data = {
    age: 25,
    children: [
      {
        age: 40,
        children: [
          {
            age: 56,
            children: [
              {
                age: 106,
                children: [],
              },
            ],
          },
          {
            age: 30,
            children: [],
          },
        ],
      },
      {
        age: 150,
        children: [
          {
            age: 16,
            children: [
              {
                age: 101,
                children: [],
              },
            ],
          },
          {
            age: 99,
            children: [],
          },
        ],
      },
    ],
  };
  const expected = {
    age: 25,
    children: [
      {
        age: 40,
        children: [
          {
            age: 56,
            children: [],
          },
          {
            age: 30,
            children: [],
          },
        ],
      },
    ],
  };
  const result = filter(x => x.age < 100, data);
  t.deepEqual(result, expected);
});

test('should work with array', (t) => {
  const data = [{
    age: 25,
    children: [
      {
        age: 40,
        children: [
          {
            age: 56,
            children: [
              {
                age: 106,
                children: [],
              },
            ],
          },
          {
            age: 30,
            children: [],
          },
        ],
      },
      {
        age: 150,
        children: [
          {
            age: 16,
            children: [
              {
                age: 101,
                children: [],
              },
            ],
          },
          {
            age: 99,
            children: [],
          },
        ],
      },
    ],
  }];
  const expected = [{
    age: 25,
    children: [
      {
        age: 40,
        children: [
          {
            age: 56,
            children: [],
          },
          {
            age: 30,
            children: [],
          },
        ],
      },
    ],
  }];
  const result = filter(x => x.age < 100, data);
  t.deepEqual(result, expected);
});

test('should work with currying', (t) => {
  const data = {
    age: 25,
    children: [
      {
        age: 40,
        children: [
          {
            age: 56,
            children: [
              {
                age: 106,
                children: [],
              },
            ],
          },
          {
            age: 30,
            children: [],
          },
        ],
      },
      {
        age: 150,
        children: [
          {
            age: 16,
            children: [
              {
                age: 101,
                children: [],
              },
            ],
          },
          {
            age: 99,
            children: [],
          },
        ],
      },
    ],
  };
  const expected = {
    age: 25,
    children: [
      {
        age: 40,
        children: [
          {
            age: 56,
            children: [],
          },
          {
            age: 30,
            children: [],
          },
        ],
      },
    ],
  };
  const filterWithinDate = filter(x => x.age < 100);
  const result = filterWithinDate(data);
  t.deepEqual(result, expected);
});
