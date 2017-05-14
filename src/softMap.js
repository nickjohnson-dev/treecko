import curry from 'lodash/fp/curry';
import first from 'lodash/fp/first';
import isArray from 'lodash/fp/isArray';
import isObject from 'lodash/fp/isObject';
import map from 'lodash/fp/map';

function softMap(iteratee, xs) {
  return map(x => ({
    ...iteratee(x),
    children: softMap(iteratee, x.children),
  }), xs);
}

export default curry((iteratee, data) => {
  if (isArray(data)) {
    return softMap(iteratee, data);
  }

  if (isObject(data)) {
    return first(softMap(iteratee, [data]));
  }

  return undefined;
});
