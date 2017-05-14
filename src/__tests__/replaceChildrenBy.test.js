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
        name: 'nick',
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
        name: 'nick',
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
        name: 'nick',
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
