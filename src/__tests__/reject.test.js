import test from 'ava';
import reject from '../reject';

test('should return tree without items that satisfy predicate', (t) => {
  const input = {
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
  const result = reject(x => x.age > 100, input);
  t.deepEqual(result, expected);
});

test('should work with array', (t) => {
  const input = [{
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
  const result = reject(x => x.age > 100, input);
  t.deepEqual(result, expected);
});

test('should work with currying', (t) => {
  const input = {
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
  const rejectOutdated = reject(x => x.age > 100);
  const result = rejectOutdated(input);
  t.deepEqual(result, expected);
});
