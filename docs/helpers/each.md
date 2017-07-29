# each

Invokes the `iteratee` with each node in the input `data` structure, moving in a depth-first fashion.

```javascript
import treecko from 'treecko';

const data = {
  id: 'a',
  children: [
    {
      id: 'b',
      children: [
        {
          id: 'c',
          children: [],
        },
      ],
    }, {
      id: 'd',
      children: [],
    },
  ],
};

const iteratee = node => {
  console.log('Node ID: ', node.id);
};

treecko.each(iteratee, data);
// Node ID: a
// Node ID: b
// Node ID: c
// Node ID: d
```

The `iteratee` function receives a metadata object as its second argument, with the following interface.

```
type metadata = {
  parent: Object;
};
```
