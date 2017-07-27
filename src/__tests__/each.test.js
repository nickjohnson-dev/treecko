import test from 'ava';
import sinon from 'sinon';
import each from '../each';

test('should invoke iteratee with each node in tree and metadata, in a depth first fashion', (t) => {
  const expected0 = [
    {
      children: [
        {
          children: [
            {
              children: [],
            },
          ],
        },
      ],
    },
    {},
  ];
  const expected1 = [
    {
      children: [
        {
          children: [],
        },
      ],
    },
    {
      parent: {
        children: [
          {
            children: [
              {
                children: [],
              },
            ],
          },
        ],
      },
    },
  ];
  const expected2 = [
    {
      children: [],
    },
    {
      parent: {
        children: [
          {
            children: [],
          },
        ],
      },
    },
  ];
  const data = {
    children: [
      {
        children: [
          {
            children: [],
          },
        ],
      },
    ],
  };
  const iteratee = sinon.spy();
  each(iteratee, data);
  t.deepEqual(iteratee.getCall(0).args, expected0);
  t.deepEqual(iteratee.getCall(1).args, expected1);
  t.deepEqual(iteratee.getCall(2).args, expected2);
});

test('should work with array', (t) => {
  const expected0 = [
    {
      children: [
        {
          children: [
            {
              children: [],
            },
          ],
        },
      ],
    },
    {},
  ];
  const expected1 = [
    {
      children: [
        {
          children: [],
        },
      ],
    },
    {
      parent: {
        children: [
          {
            children: [
              {
                children: [],
              },
            ],
          },
        ],
      },
    },
  ];
  const expected2 = [
    {
      children: [],
    },
    {
      parent: {
        children: [
          {
            children: [],
          },
        ],
      },
    },
  ];
  const data = [{
    children: [
      {
        children: [
          {
            children: [],
          },
        ],
      },
    ],
  }];
  const iteratee = sinon.spy();
  each(iteratee, data);
  t.deepEqual(iteratee.getCall(0).args, expected0);
  t.deepEqual(iteratee.getCall(1).args, expected1);
  t.deepEqual(iteratee.getCall(2).args, expected2);
});

test('should work with currying', (t) => {
  const expected0 = [
    {
      children: [
        {
          children: [
            {
              children: [],
            },
          ],
        },
      ],
    },
    {},
  ];
  const expected1 = [
    {
      children: [
        {
          children: [],
        },
      ],
    },
    {
      parent: {
        children: [
          {
            children: [
              {
                children: [],
              },
            ],
          },
        ],
      },
    },
  ];
  const expected2 = [
    {
      children: [],
    },
    {
      parent: {
        children: [
          {
            children: [],
          },
        ],
      },
    },
  ];
  const data = {
    children: [
      {
        children: [
          {
            children: [],
          },
        ],
      },
    ],
  };
  const iteratee = sinon.spy();
  each(iteratee)(data);
  t.deepEqual(iteratee.getCall(0).args, expected0);
  t.deepEqual(iteratee.getCall(1).args, expected1);
  t.deepEqual(iteratee.getCall(2).args, expected2);
});
