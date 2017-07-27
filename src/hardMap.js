import curry from 'lodash/fp/curry';
import first from 'lodash/fp/first';
import isArray from 'lodash/fp/isArray';
import isObject from 'lodash/fp/isObject';
import map from 'lodash/fp/map';

function hardMap(iteratee, xs, metadata = {}) {
  return map(x => iteratee(x, metadata), xs);
}

export default curry((iteratee, data) => {
  if (isArray(data)) {
    return hardMap(iteratee, data);
  }

  if (isObject(data)) {
    return first(hardMap(iteratee, [data]));
  }

  return undefined;
});
