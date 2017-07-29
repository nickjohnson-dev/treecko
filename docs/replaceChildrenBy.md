# replaceChildrenBy

Returns a copy of the input `data` structure with the children of the first node that satisfies the predicate replaced by the return value of `getNewChildren` invoked with the node.

```javascript
import treecko from 'treecko';

const data = {
  id: '0',
  name: 'users',
  parentId: '',
  children: [
    {
      id: '1',
      name: 'treecko',
      parentId: '0',
      children: [
        {
          id: '2',
          name: 'documents',
          parentId: '1',
          children: [],
        },
      ],
    },
  ],
};

const getChildren = parent => [
  {
    id: '3',
    name: 'music',
    parentId: parent.id,
    children: [],
  },
  {
    id: '4',
    name: 'pictures',
    parentId: parent.id,
    children: [],
  },
];

const predicate = node => node.id === '1';

const result = treecko.replaceChildrenBy(
  predicate,
  getChildren,
  data,
);
// {
//   id: '0',
//   name: 'users',
//   parentId: '',
//   children: [
//     {
//       id: '1',
//       name: 'treecko',
//       parentId: '0',
//       children: [
//         {
//           id: '3',
//           name: 'music',
//           parentId: '1',
//           children: [],
//         },
//         {
//           id: '4',
//           name: 'pictures',
//           parentId: '1',
//           children: [],
//         },
//       ],
//     },
//   ],
// }
```

The `getNewChildren` and `predicate` functions receive a metadata object as their second arguments, with the following interface.

```
type metadata = {
  parent: Object;
};
```
