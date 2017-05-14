import test from 'ava';
import addChildBy from '../addChildBy';

test('should return tree with first item that satisfies predicate having its children replaced by replacementChildren', (t) => {
  const childToAdd = { id: 'a' };
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
          childToAdd,
        ],
      },
    ],
  };
  const result = addChildBy(
    x => x.id === '1',
    childToAdd,
    input,
  );
  t.deepEqual(result, expected);
});

test('should work with an array', (t) => {
  const childToAdd = { id: 'a' };
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
          childToAdd,
        ],
      },
    ],
  }];
  const result = addChildBy(
    x => x.id === '1',
    childToAdd,
    input,
  );
  t.deepEqual(result, expected);
});

test('should work with currying', (t) => {
  const childToAdd = { id: 'a' };
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
          childToAdd,
        ],
      },
    ],
  };
  const addChildToId1 = addChildBy(x => x.id === '1');
  const result = addChildToId1(
    childToAdd,
    input,
  );
  t.deepEqual(result, expected);
});
