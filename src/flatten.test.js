import test from 'ava';
import flatten from './flatten';

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
  const input = {
    children: [
      child,
      secondChild,
    ],
  };
  const expected = [input, child, grandchild, secondChild];
  const result = flatten(input);
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
  const input = [{
    children: [
      child,
      secondChild,
    ],
  }];
  const expected = [input, child, grandchild, secondChild];
  const result = flatten(input);
  t.deepEqual(result, expected);
});
