import curry from 'lodash/fp/curry';
import getOr from 'lodash/fp/getOr';
import isObject from 'lodash/fp/isObject';

function hasId(id, data) {
  if (isObject(data)) {
    return getOr('', 'id', data) === id;
  }

  return undefined;
}

export default curry(hasId);
