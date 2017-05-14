# addChildBy

Returns a copy of the input `data` structure with the return value of `getChild` invoked with the node added to the children of the first node that satisfies the `predicate`.

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
      children: [],
    },
  ],
};

const predicate = node => node.id === '1';

const getChild = parent => ({
  id: '2',
  name: 'documents',
  parentId: parent.id,
  children: [],
});

const result = treecko.addChildBy(predicate, getChild, data);
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
//           id: '2',
//           name: 'documents',
//           parentId: '1',
//           children: [],
//         }
//       ],
//     },
//   ],
// }
```
