import compose from 'lodash/fp/compose';
import curry from 'lodash/fp/curry';
import first from 'lodash/fp/first';
import isArray from 'lodash/fp/isArray';
import isEqual from 'lodash/fp/isEqual';
import isObject from 'lodash/fp/isObject';
import addChildBy from './addChildBy';
import findOr from './findOr';
import reject from './reject';

function changeParent(newParentPredicate, predicate, xs) {
  const target = findOr('notfound', predicate, xs);

  if (target === 'notfound') return xs;

  return compose(
    addChildBy(
      newParentPredicate,
      newParent => ({ ...target, parentId: newParent.id }),
    ),
    reject(isEqual(target)),
  )(xs);
}

export default curry((newParentPredicate, predicate, data) => {
  if (isArray(data)) {
    return changeParent(newParentPredicate, predicate, data);
  }

  if (isObject(data)) {
    return first(changeParent(newParentPredicate, predicate, [data]));
  }

  return undefined;
});
