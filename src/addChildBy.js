import curry from 'lodash/fp/curry';
import first from 'lodash/fp/first';
import isArray from 'lodash/fp/isArray';
import isObject from 'lodash/fp/isObject';
import replaceChildrenBy from './replaceChildrenBy';

function addChildBy(predicate, getChild, xs) {
  return replaceChildrenBy(
    predicate,
    (x, metadata) => [...x.children, getChild(x, metadata)],
    xs,
  );
}

export default curry((predicate, getChild, data) => {
  if (isArray(data)) {
    return addChildBy(predicate, getChild, data);
  }

  if (isObject(data)) {
    return first(addChildBy(predicate, getChild, [data]));
  }

  return undefined;
});
