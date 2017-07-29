# softMapBy

Returns a copy of the input `data` structure with the `iteratee` applied to any node that satisfies the predicate. The `iteratee` is prevented from affecting the `children` property so that overall structure is preserved.

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

const predicate = node => node.value >= 10;

const iteratee = node => ({ value: node.value * 2 });

const result = treecko.softMapBy(predicate, iteratee, data);
// {
//   value: 5,
//   children: [
//     {
//       value: 20,
//       children: [],
//     },
//   ],
// }
```
