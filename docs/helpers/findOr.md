# findOr

Returns the first node in the input `data` structure that matches the `predicate`, or the `defaultValue` if no match is found.

```javascript
import treecko from 'treecko';

const data = {
  id: '0',
  name: 'users',
  children: [
    {
      id: '1',
      name: 'treecko',
      children: [
        {
          id: '2',
          name: 'documents',
          parentId: '1',
          children: [],
        },
      ],
    },
    {
      id: '3',
      name: 'shared',
      children: [],
    },
  ],
};

const defaultValue = { error: 'Node not found' };

const predicate = node => node.name === 'documents';

const result = treecko.findOr(defaultValue, predicate, data);
// {
//   id: '2',
//   name: 'documents',
//   parentId: '1',
//   children: [],
// }

const badPredicate = node => node.name === 'picture';

const badResult = treecko.findOr(defaultValue, badPredicate, data);
// { error: 'Node not found' }
```

The `predicate` function receives a metadata object as its second argument, with the following interface.

```
type metadata = {
  parent: Object;
};
```
