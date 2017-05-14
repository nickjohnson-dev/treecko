<img
  alt="What is a treecko?"
  width="100"
  height="100"
  src="http://vignette3.wikia.nocookie.net/pokemontowerdefense3/images/c/c1/Treecko.jpg/revision/latest?cb=20140803080131"
/>

# treecko

[![npm version](https://badge.fury.io/js/treecko.svg)](https://badge.fury.io/js/treecko)

A collection of **functional** and **immutable** helpers for working with **tree** data structures.

- All of the following helpers support tree objects as well as arrays of tree objects.
- All methods are curried, so you can use partial application.
- Tree nodes must have a `children` array.

### Mapping

- [softMap](docs/helpers/softMap.md)
- [softMapBy](docs/helpers/softMapBy.md)
- [hardMap](docs/helpers/hardMap.md)
- [hardMapBy](docs/helpers/hardMapBy.md)


### Reducing

- [reduce](docs/helpers/reduce.md)
- [reduceAncestryBy](docs/helpers/reduceAncestryBy.md)


### Finding

- [findOr](docs/helpers/findOr.md)


### Filtering

- [filter](docs/helpers/filter.md)
- [reject](docs/helpers/reject.md)


### Side Effects

- [each](docs/helpers/each.md)


### Flattening

- [flatten](docs/helpers/flatten.md)
- [superflatten](docs/helpers/superflatten.md)
- [flattenToIds](docs/helpers/flattenToIds.md)
- [flattenToMap](docs/helpers/flattenToMap.md)


### Restructuring

- [replaceChildrenBy](docs/helpers/replaceChildrenBy.md)
- [addChildBy](docs/helpers/addChildBy.md)
- [changeParent](docs/helpers/changeParent.md)


### Misc

- [hasId](docs/helpers/hasId.md)


# TODO

- [ ] Support different values for `children` key
- [ ] Support different values for `id` key in `flattenToMap` and `changeParent`
- [ ] Support different values for `parentId` key in `changeParent`
- [ ] Add breadth-first versions of methods
