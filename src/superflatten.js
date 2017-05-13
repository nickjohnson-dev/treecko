import isArray from 'lodash/fp/isArray';
import isObject from 'lodash/fp/isObject';
import omit from 'lodash/fp/omit';
import reduce from 'lodash/fp/reduce';

const superflatten = reduce((acc, cur) => [
  ...acc,
  omit('children', cur),
  ...superflatten(cur.children),
], []);

export default (data) => {
  if (isArray(data)) {
    return superflatten(data);
  }

  if (isObject(data)) {
    return superflatten([data]);
  }

  return undefined;
};
