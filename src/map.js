import curry from 'lodash/fp/curry';
import first from 'lodash/fp/first';
import isArray from 'lodash/fp/isArray';
import isObject from 'lodash/fp/isObject';
import lodashMap from 'lodash/fp/map';

function map(iteratee, xs) {
  return lodashMap(x => ({
    ...iteratee(x),
    children: map(iteratee, x.children),
  }), xs);
}

export default curry((iteratee, data) => {
  if (isArray(data)) {
    return map(iteratee, data);
  }

  if (isObject(data)) {
    return first(map(iteratee, [data]));
  }

  return undefined;
});
