# hasId

Returns a boolean indicating whether or not the input object has an `id` property equal to `targetId`. Provided to clean up some common use cases with other helpers.

```javascript
import treecko from 'treecko';

const resultA = treecko.hasId('a', { id: 'a' });
// true

const resultB = treecko.hasId('a', { id: 'b' });
// false

const resultC = treecko.hasId('a', { name: 'treecko' });
// false
```
