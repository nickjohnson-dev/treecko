import curry from 'lodash/fp/curry';
import first from 'lodash/fp/first';
import isArray from 'lodash/fp/isArray';
import isObject from 'lodash/fp/isObject';
import map from 'lodash/fp/map';

function replaceBy(predicate, replacement, xs) {
  return map((x) => {
    if (predicate(x)) return replacement;

    return {
      ...x,
      children: replaceBy(predicate, replacement, x.children),
    };
  }, xs);
}

export default curry((predicate, replacement, data) => {
  if (isArray(data)) {
    return replaceBy(predicate, replacement, data);
  }

  if (isObject(data)) {
    return first(replaceBy(predicate, replacement, [data]));
  }

  return undefined;
});
