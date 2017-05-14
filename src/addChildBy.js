import curry from 'lodash/fp/curry';
import first from 'lodash/fp/first';
import isArray from 'lodash/fp/isArray';
import isObject from 'lodash/fp/isObject';
import replaceChildrenBy from './replaceChildrenBy';

function addChildBy(predicate, childToAdd, xs) {
  return replaceChildrenBy(
    predicate,
    x => [...x.children, childToAdd],
    xs,
  );
}

export default curry((predicate, childToAdd, data) => {
  if (isArray(data)) {
    return addChildBy(predicate, childToAdd, data);
  }

  if (isObject(data)) {
    return first(addChildBy(predicate, childToAdd, [data]));
  }

  return undefined;
});
