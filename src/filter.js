import curry from 'lodash/fp/curry';
import first from 'lodash/fp/first';
import isArray from 'lodash/fp/isArray';
import isObject from 'lodash/fp/isObject';
import lodashFilter from 'lodash/fp/filter';
import map from 'lodash/fp/map';

function filter(predicate, xs) {
  return map(x => ({
    ...x,
    children: filter(predicate, x.children),
  }), lodashFilter(predicate, xs));
}

export default curry((predicate, data) => {
  if (isArray(data)) {
    return filter(predicate, data);
  }

  if (isObject(data)) {
    return first(filter(predicate, [data]));
  }

  return undefined;
});
