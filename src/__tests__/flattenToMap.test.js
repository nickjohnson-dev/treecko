import test from 'ava';
import flattenToMap from '../flattenToMap';

test('should return object map with tree items, children omitted, assigned to the key of their id', (t) => {
  const data = {
    id: 'a',
    parentId: '',
    children: [
      {
        id: 'b',
        parentId: 'a',
        children: [
          {
            id: 'c',
            parentId: 'b',
            children: [],
          },
        ],
      },
      {
        id: 'd',
        parentId: 'a',
        children: [],
      },
    ],
  };
  const expected = {
    a: { id: 'a', parentId: '' },
    b: { id: 'b', parentId: 'a' },
    c: { id: 'c', parentId: 'b' },
    d: { id: 'd', parentId: 'a' },
  };
  const result = flattenToMap(data);
  t.deepEqual(result, expected);
});

test('should work with an array', (t) => {
  const data = [
    {
      id: 'a',
      parentId: '',
      children: [
        {
          id: 'b',
          parentId: 'a',
          children: [],
        },
      ],
    },
    {
      id: 'c',
      parentId: '',
      children: [],
    },
  ];
  const expected = {
    a: { id: 'a', parentId: '' },
    b: { id: 'b', parentId: 'a' },
    c: { id: 'c', parentId: '' },
  };
  const result = flattenToMap(data);
  t.deepEqual(result, expected);
});
