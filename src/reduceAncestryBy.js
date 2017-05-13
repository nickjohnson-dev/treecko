import curry from 'lodash/fp/curry';
import isArray from 'lodash/fp/isArray';
import isObject from 'lodash/fp/isObject';
import findOr from './findOr';

function reduceAncestryBy(predicate, reducer, acc, xs) {
  const cur = findOr('notfound', predicate, xs);

  if (cur === 'notfound') return acc;

  return reduceAncestryBy(
    x => x.id === cur.parentId,
    reducer,
    reducer(acc, cur),
    xs,
  );
}

export default curry((predicate, reducer, startingValue, data) => {
  if (isArray(data)) {
    return reduceAncestryBy(predicate, reducer, startingValue, data);
  }

  if (isObject(data)) {
    return reduceAncestryBy(predicate, reducer, startingValue, [data]);
  }

  return undefined;
});
