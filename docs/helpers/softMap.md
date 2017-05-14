# softMap

Returns a copy of the input `data` structure with the `iteratee` applied to each node. The `iteratee` is prevented from affecting the `children` property so that overall structure is preserved.

```javascript
import treecko from 'treecko';

const data = {
  value: 5,
  children: [
    {
      value: 10,
      children: [],
    },
  ],
};

const iteratee = node => ({ value: node.value * 2 });

const result = treecko.softMap(iteratee, data);
// {
//   value: 10,
//   children: [
//     {
//       value: 20,
//       children: [],
//     },
//   ],
// }
```
