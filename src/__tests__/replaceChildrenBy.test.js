import sinon from 'sinon';
import test from 'ava';
import replaceChildrenBy from '../replaceChildrenBy';

test('should return tree with first item that satisfies predicate having its children replaced by return value of getNewChildren function', (t) => {
  const replacementChildren = [
    { id: 'a' },
  ];
  const data = {
    id: '0',
    parentId: '',
    name: 'users',
    children: [
      {
        id: '1',
        parentId: '0',
        name: 'treecko',
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
  const expected = {
    id: '0',
    parentId: '',
    name: 'users',
    children: [
      {
        id: '1',
        parentId: '0',
        name: 'treecko',
        children: replacementChildren,
      },
    ],
  };
  const result = replaceChildrenBy(
    x => x.id === '1',
    () => replacementChildren,
    data,
  );
  t.deepEqual(result, expected);
});

test('should work with an array', (t) => {
  const replacementChildren = [
    { id: 'a' },
  ];
  const data = [{
    id: '0',
    parentId: '',
    name: 'users',
    children: [
      {
        id: '1',
        parentId: '0',
        name: 'treecko',
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
  }];
  const expected = [{
    id: '0',
    parentId: '',
    name: 'users',
    children: [
      {
        id: '1',
        parentId: '0',
        name: 'treecko',
        children: replacementChildren,
      },
    ],
  }];
  const result = replaceChildrenBy(
    x => x.id === '1',
    () => replacementChildren,
    data,
  );
  t.deepEqual(result, expected);
});

test('should work with currying', (t) => {
  const replacementChildren = [
    { id: 'a' },
  ];
  const data = {
    id: '0',
    parentId: '',
    name: 'users',
    children: [
      {
        id: '1',
        parentId: '0',
        name: 'treecko',
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
  const expected = {
    id: '0',
    parentId: '',
    name: 'users',
    children: [
      {
        id: '1',
        parentId: '0',
        name: 'treecko',
        children: replacementChildren,
      },
    ],
  };
  const replaceId1Children = replaceChildrenBy(x => x.id === '1');
  const result = replaceId1Children(
    () => replacementChildren,
    data,
  );
  t.deepEqual(result, expected);
});

test('should invoke getNewChildren with metadata', (t) => {
  const getNewChildren = sinon.spy(() => []);
  const data = {
    id: '0',
    parentId: '',
    name: 'users',
    children: [
      {
        id: '1',
        parentId: '0',
        name: 'treecko',
        children: [],
      },
    ],
  };
  const expected = [
    {
      id: '1',
      parentId: '0',
      name: 'treecko',
      children: [],
    },
    {
      parent: {
        id: '0',
        parentId: '',
        name: 'users',
        children: [
          {
            id: '1',
            parentId: '0',
            name: 'treecko',
            children: [],
          },
        ],
      },
    },
  ];
  replaceChildrenBy(
    x => x.id === '1',
    getNewChildren,
    data,
  );
  const result = getNewChildren.getCall(0).args;
  t.deepEqual(result, expected);
});

test('should invoke predicate with metadata', (t) => {
  const predicate = sinon.spy(() => false);
  const data = {
    id: '0',
    parentId: '',
    name: 'users',
    children: [
      {
        id: '1',
        parentId: '0',
        name: 'treecko',
        children: [],
      },
    ],
  };
  const expected = [
    {
      id: '1',
      parentId: '0',
      name: 'treecko',
      children: [],
    },
    {
      parent: {
        id: '0',
        parentId: '',
        name: 'users',
        children: [
          {
            id: '1',
            parentId: '0',
            name: 'treecko',
            children: [],
          },
        ],
      },
    },
  ];
  replaceChildrenBy(
    predicate,
    x => x.children,
    data,
  );
  const result = predicate.getCall(1).args;
  t.deepEqual(result, expected);
});
