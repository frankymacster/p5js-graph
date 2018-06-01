// https://docs.google.com/spreadsheets/d/1JalgdYNAmCbTyhg__0BvshvXFyMvwgHq72wlvID-dPM/edit#gid=2078571488
const getProof3 = () => {
  const nodes = [{
    text: 'n',
    x: getPos(1),
    y: getPos(1),
  }, {
    text: 'm',
    x: getPos(5),
    y: getPos(1),
  }];

  const proof = [{
    id: '1',
    text: 'graphs &ni; G',
  }, {
    id: '11',
    text: 'G.nodes &ni; n',
    add: {
      nodes: [
        findByText(nodes, 'n'),
      ],
    },
  }, {
    id: '111',
    text: 'G.nodes &ni; m',
    add: {
      nodes: [
        findByText(nodes, 'm'),
      ],
    },
  }, {
    id: '1111',
    text: 'n.neighbors &ni; m',
    add: {
      edges: [
        [findByText(nodes, 'n'), findByText(nodes, 'm')],
      ],
    },
  }, {
    id: '11111',
    text: 'G.edges &ni; {n, m}',
  }, {
    id: '111111',
    text: 'm.neighbors &ni; n',
  }, {
    id: '1111111',
    text: 'G.edges &ni; {m, n}',
  }, {
    id: '11111111',
    text: '{n, m} = {m, n}',
  }];

  return proof;
};
