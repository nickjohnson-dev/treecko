import test from 'ava';
import superflatten from '../superflatten';

test('should return array with items of tree in a depth first fashion, omitting children from the items', (t) => {
  const data = {
    id: '0',
    children: [
      {
        id: '1',
        children: [
          {
            id: '2',
            children: [],
          },
        ],
      },
      {
        id: '3',
        children: [],
      },
    ],
  };
  const expected = [
    { id: '0' },
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
  const result = superflatten(data);
  t.deepEqual(result, expected);
});

test('should work with an array', (t) => {
  const data = [
    {
      id: '0',
      children: [
        {
          id: '1',
          children: [],
        },
      ],
    },
    {
      id: '2',
      children: [],
    },
  ];
  const expected = [
    { id: '0' },
    { id: '1' },
    { id: '2' },
  ];
  const result = superflatten(data);
  t.deepEqual(result, expected);
});
