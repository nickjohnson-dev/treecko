import test from 'ava';
import flattenToIds from '../flattenToIds';

test('should return object map with tree items, children omitted, assigned to the key of their id', (t) => {
  const data = {
    id: 'a',
    children: [
      {
        id: 'b',
        children: [
          {
            id: 'c',
            children: [],
          },
        ],
      }, {
        id: 'd',
        children: [],
      },
    ],
  };
  const expected = ['a', 'b', 'c', 'd'];
  const result = flattenToIds(data);
  t.deepEqual(result, expected);
});

test('should work with an array', (t) => {
  const data = [
    {
      id: 'a',
      children: [
        {
          id: 'b',
          children: [
            {
              id: 'c',
              children: [],
            },
          ],
        }, {
          id: 'd',
          children: [],
        },
      ],
    },
  ];
  const expected = ['a', 'b', 'c', 'd'];
  const result = flattenToIds(data);
  t.deepEqual(result, expected);
});
