import test from 'ava';
import sinon from 'sinon';
import each from './each';

test('should invoke iteratee with each node in tree, in a depth first fashion', (t) => {
  const grandchild = {
    children: [],
  };
  const child = {
    children: [
      grandchild,
    ],
  };
  const input = {
    children: [
      child,
    ],
  };
  const iteratee = sinon.spy();
  each(iteratee, input);
  t.deepEqual(iteratee.getCall(0).args, [input]);
  t.deepEqual(iteratee.getCall(1).args, [child]);
  t.deepEqual(iteratee.getCall(2).args, [grandchild]);
});

test('should work with array', (t) => {
  const grandchild = {
    children: [],
  };
  const child = {
    children: [
      grandchild,
    ],
  };
  const input = {
    children: [
      child,
    ],
  };
  const iteratee = sinon.spy();
  each(iteratee, [input]);
  t.deepEqual(iteratee.getCall(0).args, [input]);
  t.deepEqual(iteratee.getCall(1).args, [child]);
  t.deepEqual(iteratee.getCall(2).args, [grandchild]);
});

test('should work with currying', (t) => {
  const grandchild = {
    children: [],
  };
  const child = {
    children: [
      grandchild,
    ],
  };
  const input = {
    children: [
      child,
    ],
  };
  const iteratee = sinon.spy();
  each(iteratee)(input);
  t.deepEqual(iteratee.getCall(0).args, [input]);
  t.deepEqual(iteratee.getCall(1).args, [child]);
  t.deepEqual(iteratee.getCall(2).args, [grandchild]);
});
