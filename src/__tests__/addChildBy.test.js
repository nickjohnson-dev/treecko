import sinon from 'sinon';
import test from 'ava';
import addChildBy from '../addChildBy';

test('should return tree with first item that satisfies predicate having its children replaced by return value of getChild', (t) => {
  const child = { id: '100' };
  const data = {
    id: '0',
    name: 'users',
    children: [
      {
        id: '1',
        name: 'treecko',
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
          name: 'treecko',
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
          name: 'treecko',
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
        name: 'treecko',
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

test('should invoke getChild with metadata', (t) => {
  const getChild = sinon.spy();
  const data = {
    id: '0',
    name: 'users',
    children: [
      {
        id: '1',
        name: 'treecko',
        children: [],
      },
    ],
  };
  const expected = [
    {
      id: '1',
      name: 'treecko',
      children: [],
    },
    {
      parent: {
        id: '0',
        name: 'users',
        children: [
          {
            id: '1',
            name: 'treecko',
            children: [],
          },
        ],
      },
    },
  ];
  addChildBy(
    x => x.id === '1',
    getChild,
    data,
  );
  const result = getChild.getCall(0).args;
  t.deepEqual(result, expected);
});

test('should invoke predicate with metadata', (t) => {
  const predicate = sinon.spy(() => false);
  const data = {
    id: '0',
    name: 'users',
    children: [
      {
        id: '1',
        name: 'treecko',
        children: [],
      },
    ],
  };
  const expected = [
    {
      id: '1',
      name: 'treecko',
      children: [],
    },
    {
      parent: {
        id: '0',
        name: 'users',
        children: [
          {
            id: '1',
            name: 'treecko',
            children: [],
          },
        ],
      },
    },
  ];
  addChildBy(
    predicate,
    () => {},
    data,
  );
  const result = predicate.getCall(1).args;
  t.deepEqual(result, expected);
});
