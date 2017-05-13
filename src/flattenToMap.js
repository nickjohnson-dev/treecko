import isArray from 'lodash/fp/isArray';
import isObject from 'lodash/fp/isObject';
import omit from 'lodash/fp/omit';
import reduce from 'lodash/fp/reduce';

const flattenToMap = reduce((acc, cur) => ({
  ...acc,
  [cur.id]: omit('children', cur),
  ...flattenToMap(cur.children),
}), {});

export default (data) => {
  if (isArray(data)) {
    return flattenToMap(data);
  }

  if (isObject(data)) {
    return flattenToMap([data]);
  }

  return undefined;
};
