# hardMapBy

Returns a copy of the input `data` structure with the `iteratee` applied to any node that satisfies the predicate.

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

const result = treecko.hardMapBy(predicate, iteratee, data);
// {
//   value: 5,
//   children: [
//     {
//       value: 20,
//     },
//   ],
// }
```
