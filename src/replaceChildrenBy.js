import curry from 'lodash/fp/curry';
import first from 'lodash/fp/first';
import isArray from 'lodash/fp/isArray';
import isObject from 'lodash/fp/isObject';
import hardMapBy from './hardMapBy';

function replaceChildrenBy(predicate, getNewChildren, xs) {
  return hardMapBy(
    predicate,
    (x, metadata) => ({ ...x, children: getNewChildren(x, metadata) }),
    xs,
  );
}

export default curry((predicate, getNewChildren, data) => {
  if (isArray(data)) {
    return replaceChildrenBy(predicate, getNewChildren, data);
  }

  if (isObject(data)) {
    return first(replaceChildrenBy(predicate, getNewChildren, [data]));
  }

  return undefined;
});
