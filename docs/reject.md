# reject

Returns a copy of the input `data` structure without items that satisfy the `predicate`. **This will often drop off large branches of a tree.**

```javascript
import treecko from 'treecko';

const data = {
  age: 25,
  children: [
    {
      age: 40,
      children: [],
    },
    {
      age: 150,
      children: [],
    },
  ],
};

const predicate = node => node.age > 100;

const result = treecko.reject(predicate, data);

/*
{
  age: 25,
  children: [
    {
      age: 40,
      children: [],
    },
  ],
}
*/
```
