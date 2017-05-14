import compose from 'lodash/fp/compose';
import curry from 'lodash/fp/curry';
import first from 'lodash/fp/first';
import isArray from 'lodash/fp/isArray';
import isEqual from 'lodash/fp/isEqual';
import isObject from 'lodash/fp/isObject';
import addChildBy from './addChildBy';
import findOr from './findOr';
import reject from './reject';

function changeParent(predicate, newParentPredicate, xs) {
  const target = findOr('notfound', predicate, xs);

  if (target === 'notfound') return xs;

  const newParent = findOr('notfound', newParentPredicate, xs);

  if (newParent === 'notfound') return xs;

  return compose(
    addChildBy(newParentPredicate, {
      ...target,
      parentId: newParent.id,
    }),
    reject(isEqual(target)),
  )(xs);
}

export default curry((predicate, newParentPredicate, data) => {
  if (isArray(data)) {
    return changeParent(predicate, newParentPredicate, data);
  }

  if (isObject(data)) {
    return first(changeParent(predicate, newParentPredicate, [data]));
  }

  return undefined;
});
