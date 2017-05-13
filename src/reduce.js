import curry from 'lodash/fp/curry';
import isArray from 'lodash/fp/isArray';
import isObject from 'lodash/fp/isObject';
import lodashReduce from 'lodash/fp/reduce';

function reduce(reducer, startingValue, xs) {
  return lodashReduce((acc, cur) =>
    reduce(reducer, reducer(acc, cur), cur.children),
    startingValue,
    xs,
  );
}

export default curry((reducer, startingValue, data) => {
  if (isArray(data)) {
    return reduce(reducer, startingValue, data);
  }

  if (isObject(data)) {
    return reduce(reducer, startingValue, [data]);
  }

  return undefined;
});
