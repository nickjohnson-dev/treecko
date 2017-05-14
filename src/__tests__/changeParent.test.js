import test from 'ava';
import changeParent from '../changeParent';
import hasId from '../hasId';

// eslint-disable-next-line max-len
test('should return tree with first item that satisfies predicate in depth first search moved to be a child of first item that satisfies newParentPredicate', (t) => {
  const data = {
    id: '0',
    name: 'users',
    children: [
      {
        id: '1',
        name: 'treecko',
        children: [
          {
            id: '2',
            name: 'documents',
            parentId: '1',
            children: [],
          },
        ],
      },
      {
        id: '3',
        name: 'shared',
        children: [],
      },
    ],
  };
  const expected = {
    id: '0',
    name: 'users',
    children: [
      {
        id: '1',
        name: 'treecko',
        children: [],
      },
      {
        id: '3',
        name: 'shared',
        children: [
          {
            id: '2',
            name: 'documents',
            parentId: '3',
            children: [],
          },
        ],
      },
    ],
  };
  const result = changeParent(
    hasId('3'),
    hasId('2'),
    data,
  );
  t.deepEqual(result, expected);
});

test('should work with an array', (t) => {
  const data = [
    {
      id: '0',
      name: 'treecko',
      children: [
        {
          id: '1',
          name: 'documents',
          parentId: '0',
          children: [],
        },
      ],
    },
    {
      id: '2',
      name: 'shared',
      children: [],
    },
  ];
  const expected = [
    {
      id: '0',
      name: 'treecko',
      children: [],
    },
    {
      id: '2',
      name: 'shared',
      children: [
        {
          id: '1',
          name: 'documents',
          parentId: '2',
          children: [],
        },
      ],
    },
  ];
  const result = changeParent(
    hasId('2'),
    hasId('1'),
    data,
  );
  t.deepEqual(result, expected);
});

test('should work with currying', (t) => {
  const data = {
    id: '0',
    name: 'users',
    children: [
      {
        id: '1',
        name: 'treecko',
        children: [
          {
            id: '2',
            name: 'documents',
            parentId: '1',
            children: [],
          },
        ],
      },
      {
        id: '3',
        name: 'shared',
        children: [],
      },
    ],
  };
  const expected = {
    id: '0',
    name: 'users',
    children: [
      {
        id: '1',
        name: 'treecko',
        children: [],
      },
      {
        id: '3',
        name: 'shared',
        children: [
          {
            id: '2',
            name: 'documents',
            parentId: '3',
            children: [],
          },
        ],
      },
    ],
  };
  const moveTo3 = changeParent(hasId('3'));
  const result = moveTo3(hasId('2'), data);
  t.deepEqual(result, expected);
});
