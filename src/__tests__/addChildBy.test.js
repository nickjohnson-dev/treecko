import test from 'ava';
import addChildBy from '../addChildBy';

test('should return tree with first item that satisfies predicate having its children replaced by replacementChildren', (t) => {
  const child = { id: '100' };
  const data = {
    id: '0',
    name: 'users',
    children: [
      {
        id: '1',
        name: 'nick',
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
        name: 'nick',
        children: [
          child,
        ],
      },
    ],
  };
  const result = addChildBy(
    x => x.id === '1',
    () => child,
    data,
  );
  t.deepEqual(result, expected);
});

test('should work with an array', (t) => {
  const child = { id: '100' };
  const data = [
    {
      id: '0',
      name: 'users',
      children: [
        {
          id: '1',
          name: 'nick',
          children: [],
        },
      ],
    }, {
      id: '2',
      name: 'Applications',
      children: [
        {
          id: '3',
          name: 'utilities',
          children: [],
        },
      ],
    },
  ];
  const expected = [
    {
      id: '0',
      name: 'users',
      children: [
        {
          id: '1',
          name: 'nick',
          children: [
            child,
          ],
        },
      ],
    }, {
      id: '2',
      name: 'Applications',
      children: [
        {
          id: '3',
          name: 'utilities',
          children: [],
        },
      ],
    },
  ];
  const result = addChildBy(
    x => x.id === '1',
    () => child,
    data,
  );
  t.deepEqual(result, expected);
});

test('should work with currying', (t) => {
  const child = { id: '100' };
  const data = {
    id: '0',
    name: 'users',
    children: [
      {
        id: '1',
        name: 'nick',
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
        name: 'nick',
        children: [
          child,
        ],
      },
    ],
  };
  const addTo1 = addChildBy(x => x.id === '1');
  const result = addTo1(
    () => child,
    data,
  );
  t.deepEqual(result, expected);
});
