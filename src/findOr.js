import curry from 'lodash/fp/curry';
import isArray from 'lodash/fp/isArray';
import isEmpty from 'lodash/fp/isEmpty';
import isObject from 'lodash/fp/isObject';
import reduce from 'lodash/fp/reduce';

function findOr(defaultValue, predicate, xs) {
  return reduce((acc, cur) => {
    if (acc !== defaultValue) return acc;

    if (predicate(cur)) return cur;

    if (isEmpty(cur.children)) return acc;

    return findOr(acc, predicate, cur.children);
  }, defaultValue, xs);
}

export default curry((defaultValue, predicate, data) => {
  if (isArray(data)) {
    return findOr(defaultValue, predicate, data);
  }

  if (isObject(data)) {
    return findOr(defaultValue, predicate, [data]);
  }

  return undefined;
});
