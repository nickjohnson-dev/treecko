import test from 'ava';
import superflatten from './superflatten';

test('should return array with items of tree in a depth first fashion, omitting children from the items', (t) => {
  const grandchild = {
    id: '2',
    children: [],
  };
  const child = {
    id: '1',
    children: [
      grandchild,
    ],
  };
  const secondChild = {
    id: '3',
    children: [],
  };
  const input = {
    id: '0',
    children: [
      child,
      secondChild,
    ],
  };
  const expected = [
    { id: '0' },
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
  const result = superflatten(input);
  t.deepEqual(result, expected);
});

test('should work with an array', (t) => {
  const grandchild = {
    id: '2',
    children: [],
  };
  const child = {
    id: '1',
    children: [
      grandchild,
    ],
  };
  const secondChild = {
    id: '3',
    children: [],
  };
  const input = [{
    id: '0',
    children: [
      child,
      secondChild,
    ],
  }];
  const expected = [
    { id: '0' },
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
  const result = superflatten(input);
  t.deepEqual(result, expected);
});
