# superflatten

Returns the nodes of the input `data` structure in an array, ordered depth-first, and drops children properties to reduce memory footprint.

```javascript
import treecko from 'treecko';

const data = {
  id: 'a',
  parentId: '',
  children: [
    {
      id: 'b',
      parentId: 'a',
      children: [
        {
          id: 'c',
          parentId: 'b',
          children: [],
        },
      ],
    },
    {
      id: 'd',
      parentId: 'a',
      children: [],
    },
  ],
};

const result = treecko.superflatten(data);
// [
//   {
//     id: 'a',
//     parentId: '',
//   },
//   {
//     id: 'b',
//     parentId: 'a',
//   },
//   {
//     id: 'c',
//     parentId: 'b',
//   },
//   {
//     id: 'd',
//     parentId: 'a',
//   },
// ]
```
