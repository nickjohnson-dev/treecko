# reduceAncestryBy

Returns the result of a reduce operation starting with the first node that satisfies the `predicate` and moving up its ancestry to end with the root of the input `data` structure.

A good use for this method is building the full path for an item in a file structure.

```javascript
import treecko from 'treecko';

const data = {
  id: '0',
  parentId: '',
  name: 'users',
  children: [
    {
      id: '1',
      parentId: '0',
      name: 'treecko',
      children: [
        {
          id: '2',
          parentId: '1',
          name: 'documents',
          children: [],
        },
      ],
    },
  ],
};

const predicate = node => node.id === '2';

const reducer = (acc, cur) => `/${cur.name}${acc}`;

const startingValue = '';

const result = reduceAncestryBy(
  predicate,
  reducer,
  startingValue,
  data,
);
// /users/treecko/documents
```
