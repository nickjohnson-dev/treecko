import sinon from 'sinon';
import test from 'ava';
import softMapBy from '../softMapBy';

test('should return tree with iteratee applied to items that satisfy predicate, preserving children', (t) => {
  const data = {
    value: 5,
    children: [
      {
        value: 10,
        children: [],
      },
    ],
  };
  const expected = {
    value: 5,
    children: [
      {
        value: 20,
        children: [],
      },
    ],
  };
  const result = softMapBy(
    x => x.value >= 10,
    x => ({ value: x.value * 2 }),
    data,
  );
  t.deepEqual(result, expected);
});

test('should work with an array', (t) => {
  const data = [{
    value: 5,
    children: [
      {
        value: 10,
        children: [],
      },
    ],
  }];
  const expected = [{
    value: 5,
    children: [
      {
        value: 20,
        children: [],
      },
    ],
  }];
  const result = softMapBy(
    x => x.value >= 10,
    x => ({ value: x.value * 2 }),
    data,
  );
  t.deepEqual(result, expected);
});

test('should work with currying', (t) => {
  const data = {
    value: 5,
    children: [
      {
        value: 10,
        children: [],
      },
    ],
  };
  const expected = {
    value: 5,
    children: [
      {
        value: 20,
        children: [],
      },
    ],
  };
  const mapDoubleDigits = softMapBy(x => x.value >= 10);
  const result = mapDoubleDigits(
    x => ({ value: x.value * 2 }),
    data,
  );
  t.deepEqual(result, expected);
});

test('should invoke iteratee with metadata', (t) => {
  const iteratee = sinon.spy();
  const data = {
    value: 5,
    children: [
      {
        value: 10,
        children: [],
      },
    ],
  };
  const expected = [
    {
      value: 10,
      children: [],
    },
    {
      parent: {
        value: 5,
        children: [
          {
            value: 10,
            children: [],
          },
        ],
      },
    },
  ];
  softMapBy(
    x => x.value >= 10,
    iteratee,
    data,
  );
  const result = iteratee.getCall(0).args;
  t.deepEqual(result, expected);
});

test('should invoke predicate with metadata', (t) => {
  const predicate = sinon.spy();
  const data = {
    value: 5,
    children: [
      {
        value: 10,
        children: [],
      },
    ],
  };
  const expected = [
    {
      value: 10,
      children: [],
    },
    {
      parent: {
        value: 5,
        children: [
          {
            value: 10,
            children: [],
          },
        ],
      },
    },
  ];
  softMapBy(
    predicate,
    x => x,
    data,
  );
  const result = predicate.getCall(1).args;
  t.deepEqual(result, expected);
});
