import curry from 'lodash/fp/curry';
import first from 'lodash/fp/first';
import isArray from 'lodash/fp/isArray';
import isObject from 'lodash/fp/isObject';
import lodashReject from 'lodash/fp/reject';
import map from 'lodash/fp/map';

function reject(predicate, xs) {
  return map(x => ({
    ...x,
    children: reject(predicate, lodashReject(predicate, x.children)),
  }), xs);
}

export default curry((predicate, data) => {
  if (isArray(data)) {
    return reject(predicate, data);
  }

  if (isObject(data)) {
    return first(reject(predicate, [data]));
  }

  return undefined;
});
