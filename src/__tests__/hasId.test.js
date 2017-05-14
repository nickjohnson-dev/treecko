import test from 'ava';
import hasId from '../hasId';

test('should return true when data id is equal to id', (t) => {
  const input = {
    id: 'a',
  };
  const result = hasId('a', input);
  t.is(result, true);
});

test('should return false when data id is not equal to id', (t) => {
  const input = {
    id: 'b',
  };
  const result = hasId('a', input);
  t.is(result, false);
});

test('should work with currying', (t) => {
  const input = {
    id: 'a',
  };
  const hasIdA = hasId('a');
  const result = hasIdA(input);
  t.is(result, true);
});
