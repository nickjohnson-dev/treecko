import curry from 'lodash/fp/curry';
import isArray from 'lodash/fp/isArray';
import isObject from 'lodash/fp/isObject';
import lodashEach from 'lodash/fp/each';

function each(iteratee, xs) {
  lodashEach((x) => {
    iteratee(x);
    each(iteratee, x.children);
  }, xs);
}

export default curry((iteratee, data) => {
  if (isArray(data)) {
    each(iteratee, data);
  }

  if (isObject(data)) {
    each(iteratee, [data]);
  }
});
