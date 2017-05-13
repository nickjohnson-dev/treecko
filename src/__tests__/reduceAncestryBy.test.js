import test from 'ava';
import reduceAncestryBy from '../reduceAncestryBy';

test('should return single value created by reducing ancestry starting with first item in a depth first search that satisfies predicate', (t) => {
  const input = {
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
          {
            id: '3',
            parentId: '1',
            name: 'pictures',
            children: [],
          },
        ],
      },
      {
        id: '4',
        parentId: '0',
        name: 'shared',
        children: [
          {
            id: '5',
            parentId: '4',
            name: 'documents',
            children: [],
          },
          {
            id: '6',
            parentId: '4',
            name: 'pictures',
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
    input,
  );
  t.deepEqual(result, expected);
});

test('should work with an array', (t) => {
  const input = [{
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
          {
            id: '3',
            parentId: '1',
            name: 'pictures',
            children: [],
          },
        ],
      },
      {
        id: '4',
        parentId: '0',
        name: 'shared',
        children: [
          {
            id: '5',
            parentId: '4',
            name: 'documents',
            children: [],
          },
          {
            id: '6',
            parentId: '4',
            name: 'pictures',
            children: [],
          },
        ],
      },
    ],
  }];
  const expected = '/users/nick/documents';
  const result = reduceAncestryBy(
    x => x.id === '2',
    (acc, cur) => `/${cur.name}${acc}`,
    '',
    input,
  );
  t.deepEqual(result, expected);
});

test('should work with currying', (t) => {
  const input = {
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
          {
            id: '3',
            parentId: '1',
            name: 'pictures',
            children: [],
          },
        ],
      },
      {
        id: '4',
        parentId: '0',
        name: 'shared',
        children: [
          {
            id: '5',
            parentId: '4',
            name: 'documents',
            children: [],
          },
          {
            id: '6',
            parentId: '4',
            name: 'pictures',
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
    input,
  );
  t.deepEqual(result, expected);
});
