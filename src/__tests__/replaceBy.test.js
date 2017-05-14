import test from 'ava';
import replaceBy from '../replaceBy';

test('should return tree with items that satisfy predicate replaced by replacement', (t) => {
  const data = {
    value: 5,
    children: [
      {
        value: 10,
        children: [],
      },
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
        value: -1,
        children: [],
      },
      {
        value: -1,
        children: [],
      },
    ],
  };
  const result = replaceBy(
    x => x.value >= 10,
    () => ({ children: [], value: -1 }),
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
        value: -1,
        children: [],
      },
      {
        value: -1,
        children: [],
      },
    ],
  }];
  const result = replaceBy(
    x => x.value >= 10,
    () => ({ children: [], value: -1 }),
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
        value: -1,
        children: [],
      },
      {
        value: -1,
        children: [],
      },
    ],
  };
  const replaceDoubleDigitValues = replaceBy(x => x.value >= 10);
  const result = replaceDoubleDigitValues(
    () => ({ children: [], value: -1 }),
    data,
  );
  t.deepEqual(result, expected);
});
