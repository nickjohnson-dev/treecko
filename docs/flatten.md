# flatten

Returns the nodes of the input `data` structure in an array, ordered depth-first, and retains children properties on nodes.

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

const result = treecko.flatten(data);
// [
//   {
//     id: 'a',
//     parentId: '',
//     children: [
//       {
//         id: 'b',
//         parentId: 'a',
//         children: [
//           {
//             id: 'c',
//             parentId: 'b',
//             children: [],
//           },
//         ],
//       },
//       {
//         id: 'd',
//         parentId: 'a',
//         children: [],
//       },
//     ],
//   },
//   {
//     id: 'b',
//     parentId: 'a',
//     children: [
//       {
//         id: 'c',
//         parentId: 'b',
//         children: [],
//       },
//     ],
//   },
//   {
//     id: 'c',
//     parentId: 'b',
//     children: [],
//   },
//   {
//     id: 'd',
//     parentId: 'a',
//     children: [],
//   },
// ]
```
