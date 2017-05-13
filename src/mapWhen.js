import curry from 'lodash/fp/curry';
import first from 'lodash/fp/first';
import isArray from 'lodash/fp/isArray';
import isObject from 'lodash/fp/isObject';
import map from 'lodash/fp/map';

function mapWhen(predicate, iteratee, xs) {
  return map(x => ({
    ...(predicate(x) ? iteratee(x) : x),
    children: mapWhen(predicate, iteratee, x.children),
  }), xs);
}

export default curry((predicate, iteratee, data) => {
  if (isArray(data)) {
    return mapWhen(predicate, iteratee, data);
  }

  if (isObject(data)) {
    return first(mapWhen(predicate, iteratee, [data]));
  }

  return undefined;
});
