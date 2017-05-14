import get from 'lodash/fp/get';
import test from 'ava';
import findOr from '../findOr';

test('should return first node in tree that satisfies predicate, in a depth first fashion', (t) => {
  const grandchild = {
    children: [],
    matches: true,
  };
  const data = {
    children: [
      {
        children: [
          grandchild,
        ],
      },
      {
        children: [],
        matches: true,
      },
    ],
  };
  const defaultValue = 'error';
  const expected = grandchild;
  const result = findOr(defaultValue, get('matches'), data);
  t.is(result, expected);
});

test('should return defaultValue when no node matches predicate', (t) => {
  const grandchild = {
    children: [],
  };
  const data = {
    children: [
      {
        children: [
          grandchild,
        ],
      },
      {
        children: [],
      },
    ],
  };
  const defaultValue = 'error';
  const expected = defaultValue;
  const result = findOr(defaultValue, get('matches'), data);
  t.is(result, expected);
});

test('should work with array', (t) => {
  const grandchild = {
    children: [],
    matches: true,
  };
  const data = [{
    children: [
      {
        children: [
          grandchild,
        ],
      },
      {
        children: [],
        matches: true,
      },
    ],
  }];
  const defaultValue = 'error';
  const expected = grandchild;
  const result = findOr(defaultValue, get('matches'), data);
  t.is(result, expected);
});

test('should work with currying', (t) => {
  const grandchild = {
    children: [],
    matches: true,
  };
  const data = {
    children: [
      {
        children: [
          grandchild,
        ],
      },
      {
        children: [],
        matches: true,
      },
    ],
  };
  const defaultValue = 'error';
  const expected = grandchild;
  const result = findOr(defaultValue)(get('matches'))(data);
  t.is(result, expected);
});
