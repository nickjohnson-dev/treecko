import test from 'ava';
import reduceAncestryBy from '../reduceAncestryBy';

test('should return single value created by reducing ancestry starting with first item in a depth first search that satisfies predicate', (t) => {
  const data = {
    id: '0',
    parentId: '',
    name: 'users',
    children: [
      {
        id: '1',
        parentId: '0',
        name: 'nick',
        children: [
          {
            id: '2',
            parentId: '1',
            name: 'documents',
            children: [],
          },
        ],
      },
    ],
  };
  const expected = '/users/nick/documents';
  const result = reduceAncestryBy(
    x => x.id === '2',
    (acc, cur) => `/${cur.name}${acc}`,
    '',
    data,
  );
  t.deepEqual(result, expected);
});

test('should work with an array', (t) => {
  const data = [
    {
      id: '1',
      parentId: '0',
      name: 'users',
      children: [
        {
          id: '2',
          parentId: '1',
          name: 'nick',
          children: [],
        },
      ],
    },
    {
      id: '4',
      parentId: '0',
      name: 'applications',
      children: [
        {
          id: '5',
          parentId: '4',
          name: 'atom',
          children: [],
        },
      ],
    },
  ];
  const expected = '/users/nick';
  const result = reduceAncestryBy(
    x => x.id === '2',
    (acc, cur) => `/${cur.name}${acc}`,
    '',
    data,
  );
  t.deepEqual(result, expected);
});

test('should work with currying', (t) => {
  const data = {
    id: '0',
    parentId: '',
    name: 'users',
    children: [
      {
        id: '1',
        parentId: '0',
        name: 'nick',
        children: [
          {
            id: '2',
            parentId: '1',
            name: 'documents',
            children: [],
          },
        ],
      },
    ],
  };
  const expected = '/users/nick/documents';
  const getFullPath = reduceAncestryBy(x => x.id === '2');
  const result = getFullPath(
    (acc, cur) => `/${cur.name}${acc}`,
    '',
    data,
  );
  t.deepEqual(result, expected);
});
