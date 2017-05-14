# hardMap

Returns a copy of the input `data` structure with the `iteratee` applied to each node.

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

const result = treecko.hardMap(iteratee, data);
// {
//   value: 10,
// }
```
