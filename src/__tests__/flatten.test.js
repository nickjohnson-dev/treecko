import test from 'ava';
import flatten from '../flatten';

test('should return array with items of tree flattened in a depth first fashion', (t) => {
  const grandchild = {
    children: [],
  };
  const child = {
    children: [
      grandchild,
    ],
  };
  const secondChild = {
    children: [],
  };
  const data = {
    children: [
      child,
      secondChild,
    ],
  };
  const expected = [data, child, grandchild, secondChild];
  const result = flatten(data);
  t.deepEqual(result, expected);
});

test('should work with an array', (t) => {
  const grandchild = {
    children: [],
  };
  const child = {
    children: [
      grandchild,
    ],
  };
  const secondChild = {
    children: [],
  };
  const data = [{
    children: [
      child,
      secondChild,
    ],
  }];
  const expected = [data[0], child, grandchild, secondChild];
  const result = flatten(data);
  t.deepEqual(result, expected);
});
