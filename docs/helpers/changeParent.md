# changeParent

Returns a copy of the input `data` structure with a node moved from under one parent to under another. Uses the `predicate` to locate and remove the child, and the `newParentPredicate` to designate the new parent node. Updates the `parentId` property on the child with the `id` property of the new parent.

```javascript
import treecko from 'treecko';

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

const newParentPredicate = node => node.id === '3';

const predicate = node => node.id === '2';

const result = treecko.changeParent(
  newParentPredicate,
  predicate,
  data,
);
// {
//   id: '0',
//   name: 'users',
//   children: [
//     {
//       id: '1',
//       name: 'treecko',
//       children: [],
//     },
//     {
//       id: '3',
//       name: 'shared',
//       children: [
//         {
//           id: '2',
//           name: 'documents',
//           parentId: '3',
//           children: [],
//         },
//       ],
//     },
//   ],
// }
```
