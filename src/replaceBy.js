import curry from 'lodash/fp/curry';
import first from 'lodash/fp/first';
import isArray from 'lodash/fp/isArray';
import isObject from 'lodash/fp/isObject';
import map from 'lodash/fp/map';

function replaceBy(predicate, getNode, xs) {
  return map((x) => {
    if (predicate(x)) return getNode(x);

    return {
      ...x,
      children: replaceBy(predicate, getNode, x.children),
    };
  }, xs);
}

export default curry((predicate, getNode, data) => {
  if (isArray(data)) {
    return replaceBy(predicate, getNode, data);
  }

  if (isObject(data)) {
    return first(replaceBy(predicate, getNode, [data]));
  }

  return undefined;
});
