# flattenToMap

Returns an object map with the nodes of the input `data` structure assigned to keys equal to their `id` property.

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

const result = treecko.flattenToMap(data);
// {
//   'a': {
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
//   'b': {
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
//   'c': {
//     id: 'c',
//     parentId: 'b',
//     children: [],
//   },
//   'd': {
//     id: 'd',
//     parentId: 'a',
//     children: [],
//   },
// }
```
