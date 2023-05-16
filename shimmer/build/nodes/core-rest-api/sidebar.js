module.exports = [
  { type: 'doc', id: 'nodes/core-rest-api/iota-core-rest-api' },
  {
    type: 'category',
    label: 'node',
    link: {
      type: 'generated-index',
      title: 'node',
      slug: '/category/nodes/core-rest-api/node',
    },
    items: [
      {
        type: 'doc',
        id: 'nodes/core-rest-api/returns-the-health-of-the-node',
        label: 'Returns the health of the node.',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'nodes/core-rest-api/returns-the-available-api-route-groups-of-the-node',
        label: 'Returns the available API route groups of the node.',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'nodes/core-rest-api/returns-general-information-about-the-node',
        label: 'Returns general information about the node.',
        className: 'api-method get',
      },
    ],
  },
  {
    type: 'category',
    label: 'tangle',
    link: {
      type: 'generated-index',
      title: 'tangle',
      slug: '/category/nodes/core-rest-api/tangle',
    },
    items: [
      {
        type: 'doc',
        id: 'nodes/core-rest-api/returns-tips-that-are-ideal-for-attaching-a-block',
        label: 'Returns tips that are ideal for attaching a block.',
        className: 'api-method get',
      },
    ],
  },
  {
    type: 'category',
    label: 'blocks',
    link: {
      type: 'generated-index',
      title: 'blocks',
      slug: '/category/nodes/core-rest-api/blocks',
    },
    items: [
      {
        type: 'doc',
        id: 'nodes/core-rest-api/submit-a-block',
        label: 'Submit a block.',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'nodes/core-rest-api/returns-block-data-as-json-by-its-identifier',
        label: 'Returns block data as JSON by its identifier.',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'nodes/core-rest-api/find-the-metadata-of-a-given-block',
        label: 'Find the metadata of a given block.',
        className: 'api-method get',
      },
    ],
  },
  {
    type: 'category',
    label: 'UTXO',
    link: {
      type: 'generated-index',
      title: 'UTXO',
      slug: '/category/nodes/core-rest-api/utxo',
    },
    items: [
      {
        type: 'doc',
        id: 'nodes/core-rest-api/find-an-output-by-its-identifier',
        label: 'Find an output by its identifier.',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'nodes/core-rest-api/returns-metadata-about-an-output-by-its-identifier',
        label: 'Returns metadata about an output by its identifier.',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'nodes/core-rest-api/returns-all-stored-receipts',
        label: 'Returns all stored receipts.',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'nodes/core-rest-api/returns-all-stored-receipts-for-a-given-migration-index',
        label: 'Returns all stored receipts for a given migration index.',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'nodes/core-rest-api/returns-information-about-the-treasury',
        label: 'Returns information about the treasury.',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'nodes/core-rest-api/returns-the-included-block-of-a-transaction',
        label: 'Returns the included block of a transaction.',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'nodes/core-rest-api/find-the-metadata-of-the-included-block-of-a-transaction',
        label: 'Find the metadata of the included block of a transaction.',
        className: 'api-method get',
      },
    ],
  },
  {
    type: 'category',
    label: 'milestones',
    link: {
      type: 'generated-index',
      title: 'milestones',
      slug: '/category/nodes/core-rest-api/milestones',
    },
    items: [
      {
        type: 'doc',
        id: 'nodes/core-rest-api/look-up-a-milestone-by-a-given-milestone-id',
        label: 'Look up a milestone by a given milestone ID.',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'nodes/core-rest-api/get-all-utxo-changes-of-a-given-milestone-by-milestone-id',
        label: 'Get all UTXO changes of a given milestone by milestone ID.',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'nodes/core-rest-api/look-up-a-milestone-by-a-given-milestone-index',
        label: 'Look up a milestone by a given milestone index.',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'nodes/core-rest-api/get-all-utxo-changes-of-a-given-milestone-by-milestone-index',
        label: 'Get all UTXO changes of a given milestone by milestone index.',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'nodes/core-rest-api/computes-applied-and-confirmed-merkle-route-hashes-for-a-proposed-milestone',
        label:
          'Computes applied and confirmed merkle route hashes for a proposed milestone.',
        className: 'api-method post',
      },
    ],
  },
  {
    type: 'category',
    label: 'peers',
    link: {
      type: 'generated-index',
      title: 'peers',
      slug: '/category/nodes/core-rest-api/peers',
    },
    items: [
      {
        type: 'doc',
        id: 'nodes/core-rest-api/get-information-about-the-peers-of-the-node',
        label: 'Get information about the peers of the node.',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'nodes/core-rest-api/add-a-given-peer-to-the-node',
        label: 'Add a given peer to the node.',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'nodes/core-rest-api/get-information-about-a-given-peer',
        label: 'Get information about a given peer.',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'nodes/core-rest-api/remove-disconnect-a-given-peer',
        label: 'Remove/disconnect a given peer.',
        className: 'api-method delete',
      },
    ],
  },
  {
    type: 'category',
    label: 'control',
    link: {
      type: 'generated-index',
      title: 'control',
      slug: '/category/nodes/core-rest-api/control',
    },
    items: [
      {
        type: 'doc',
        id: 'nodes/core-rest-api/prunes-the-node-database',
        label: 'Prunes the node database.',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'nodes/core-rest-api/creates-a-new-snapshot',
        label: 'Creates a new snapshot.',
        className: 'api-method post',
      },
    ],
  },
];
