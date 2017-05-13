import isArray from 'lodash/fp/isArray';
import isObject from 'lodash/fp/isObject';
import reduce from 'lodash/fp/reduce';

const flatten = reduce((acc, cur) => [
  ...acc,
  cur,
  ...flatten(cur.children),
], []);

export default (data) => {
  if (isArray(data)) {
    return flatten(data);
  }

  if (isObject(data)) {
    return flatten([data]);
  }

  return undefined;
};
