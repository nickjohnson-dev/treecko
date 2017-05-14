import test from 'ava';
import changeParent from '../changeParent';
// eslint-disable-next-line max-len
test('should return tree with first item that satisfies predicate in depth first search moved to be a child of first item that satisfies newParentPredicate', (t) => {
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
          {
            id: '2',
            parentId: '4',
            name: 'documents',
            children: [],
          },
        ],
      },
    ],
  };
  const result = changeParent(
    x => x.id === '2',
    x => x.id === '4',
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
          {
            id: '2',
            parentId: '4',
            name: 'documents',
            children: [],
          },
        ],
      },
    ],
  }];
  const result = changeParent(
    x => x.id === '2',
    x => x.id === '4',
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
          {
            id: '2',
            parentId: '4',
            name: 'documents',
            children: [],
          },
        ],
      },
    ],
  };
  const changeId2Parent = changeParent(x => x.id === '2');
  const result = changeId2Parent(
    x => x.id === '4',
    input,
  );
  t.deepEqual(result, expected);
});
