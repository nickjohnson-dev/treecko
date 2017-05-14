import test from 'ava';
import hasId from '../hasId';

test('should return true when data id is equal to id', (t) => {
  const data = {
    id: 'a',
  };
  const result = hasId('a', data);
  t.is(result, true);
});

test('should return false when data id is not equal to id', (t) => {
  const data = {
    id: 'b',
  };
  const result = hasId('a', data);
  t.is(result, false);
});

test('should work with currying', (t) => {
  const data = {
    id: 'a',
  };
  const hasIdA = hasId('a');
  const result = hasIdA(data);
  t.is(result, true);
});
