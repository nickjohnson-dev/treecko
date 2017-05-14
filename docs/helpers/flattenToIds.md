# flattenToIds

Returns an array containing the `id` properties of each node in the input data structure, ordered depth-first.

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

const result = treecko.flattenToIds(data);
// ['a', 'b', 'c', 'd']
```
