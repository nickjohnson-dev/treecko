# reduce

Returns the result of a depth-first reduce operation on the input `data` structure.

```javascript
import treecko from 'treecko';

const data = {
  value: 'a',
  children: [
    {
      value: 'b',
      children: [
        {
          value: 'c',
          children: [],
        },
      ],
    },
    {
      value: 'd',
      children: [],
    },
  ],
};

const reducer = (acc, cur) => `${acc}${cur.value}`;

const startingValue = '';

const result = treecko.reduce(reducer, startingValue, data);
// abcd
```
