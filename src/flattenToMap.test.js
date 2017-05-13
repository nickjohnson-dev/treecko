import test from 'ava';
import flattenToMap from './flattenToMap';

test('should return object map with tree items, children omitted, assigned to the key of their id', (t) => {
  const grandchild = {
    id: 'c',
    parentId: 'b',
    children: [],
  };
  const child = {
    id: 'b',
    parentId: 'a',
    children: [
      grandchild,
    ],
  };
  const secondChild = {
    id: 'd',
    parentId: 'a',
    children: [],
  };
  const input = {
    id: 'a',
    parentId: '',
    children: [
      child,
      secondChild,
    ],
  };
  const expected = {
    a: { id: 'a', parentId: '' },
    b: { id: 'b', parentId: 'a' },
    c: { id: 'c', parentId: 'b' },
    d: { id: 'd', parentId: 'a' },
  };
  const result = flattenToMap(input);
  t.deepEqual(result, expected);
});

test('should work with an array', (t) => {
  const grandchild = {
    id: 'c',
    parentId: 'b',
    children: [],
  };
  const child = {
    id: 'b',
    parentId: 'a',
    children: [
      grandchild,
    ],
  };
  const secondChild = {
    id: 'd',
    parentId: 'a',
    children: [],
  };
  const input = [{
    id: 'a',
    parentId: '',
    children: [
      child,
      secondChild,
    ],
  }];
  const expected = {
    a: { id: 'a', parentId: '' },
    b: { id: 'b', parentId: 'a' },
    c: { id: 'c', parentId: 'b' },
    d: { id: 'd', parentId: 'a' },
  };
  const result = flattenToMap(input);
  t.deepEqual(result, expected);
});
