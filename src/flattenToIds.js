import isArray from 'lodash/fp/isArray';
import isObject from 'lodash/fp/isObject';
import reduce from 'lodash/fp/reduce';

const flattenToIds = reduce((acc, cur) => [
  ...acc,
  cur.id,
  ...flattenToIds(cur.children),
], []);

export default (data) => {
  if (isArray(data)) {
    return flattenToIds(data);
  }

  if (isObject(data)) {
    return flattenToIds([data]);
  }

  return undefined;
};
