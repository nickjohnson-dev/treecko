import test from 'ava';
import softMap from '../softMap';

test('should return tree with iteratee applied to each item, preserving children', (t) => {
  const data = {
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
  const result = softMap(x => ({
    value: x.value * 2,
  }), data);
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
  const expected = [{
    value: 10,
    children: [
      {
        value: 20,
        children: [],
      },
    ],
  }];
  const result = softMap(x => ({
    value: x.value * 2,
  }), data);
  t.deepEqual(result, expected);
});

test('should work with currying', (t) => {
  const data = {
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
  const softMapDoubleValue = softMap(x => ({ value: x.value * 2 }));
  const result = softMapDoubleValue(data);
  t.deepEqual(result, expected);
});

test('should invoke iteratee with metadata including parent', (t) => {
  const data = {
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
        parent: {
          value: 5,
          children: [
            {
              value: 10,
              children: [],
            },
          ],
        },
      },
    ],
    parent: undefined,
  };
  const result = softMap((x, { parent }) => ({
    value: x.value * 2,
    parent,
  }), data);
  t.deepEqual(result, expected);
});
