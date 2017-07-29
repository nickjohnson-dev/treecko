<img
  alt="What is a treecko?"
  width="100"
  height="100"
  src="http://vignette3.wikia.nocookie.net/pokemontowerdefense3/images/c/c1/Treecko.jpg/revision/latest?cb=20140803080131"
/>

# treecko

[![npm](https://img.shields.io/npm/v/treecko.svg?style=flat-square)](https://www.npmjs.com/package/treecko)
[![Travis](https://img.shields.io/travis/nickjohnson-dev/treecko.svg?style=flat-square)](https://travis-ci.org/nickjohnson-dev/treecko)

A collection of **functional** and **immutable** helpers for working with **tree** data structures.

- Both **Trees : Object** and **Tree Lists : Array<Object>** are supported.
- **Curried** for partial application.

### Mapping

- [softMap](docs/softMap.md)
- [softMapBy](docs/softMapBy.md)
- [hardMap](docs/hardMap.md)
- [hardMapBy](docs/hardMapBy.md)


### Reducing

- [reduce](docs/reduce.md)
- [reduceAncestryBy](docs/reduceAncestryBy.md)


### Finding

- [findOr](docs/findOr.md)


### Filtering

- [filter](docs/filter.md)
- [reject](docs/reject.md)


### Side Effects

- [each](docs/each.md)


### Flattening

- [flatten](docs/flatten.md)
- [superflatten](docs/superflatten.md)
- [flattenToIds](docs/flattenToIds.md)
- [flattenToMap](docs/flattenToMap.md)


### Restructuring

- [replaceChildrenBy](docs/replaceChildrenBy.md)
- [addChildBy](docs/addChildBy.md)
- [changeParent](docs/changeParent.md)


### Misc

- [hasId](docs/hasId.md)


# TODO

- [ ] Support different values for `children` key
- [ ] Support different values for `id` key in `flattenToMap` and `changeParent`
- [ ] Support different values for `parentId` key in `changeParent`
- [ ] Add breadth-first versions of methods
