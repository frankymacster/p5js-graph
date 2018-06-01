// https://docs.google.com/spreadsheets/d/1JalgdYNAmCbTyhg__0BvshvXFyMvwgHq72wlvID-dPM/edit#gid=2078571488
const getProof2 = () => {
  const nodes = [{
    text: 'n',
    x: getPos(1),
    y: getPos(1),
  }, {
    text: 'm',
    x: getPos(5),
    y: getPos(1),
  }, {
    text: 'x',
    x: getPos(2),
    y: getPos(2),
  }, {
    text: 'y',
    x: getPos(4),
    y: getPos(2),
  }];

  const proof = [{
    id: '1',
    text: 'graphs.trees &ni; G<br />&nbsp; ...<br />&nbsp; &nbsp; G.paths.(ends = {u, v}.# = 1)',
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
    text: 'G.paths.(ends = {u, v}).# > 1',
  }, {
    id: '11111',
    text: 'G.paths.(ends = {u, v}) &ni; P1',
    add: {
      paths: [
        [findByText(nodes, 'n'), findByText(nodes, 'm')],
      ],
    },
  }, {
    id: '111111',
    text: 'G.paths.(ends = {u, v}) &ni; P2',
    add: {
      paths: [
        [findByText(nodes, 'n'), findByText(nodes, 'm')],
      ],
    },
  }, {
    id: '1111111',
    text: 'P1 &ne; P2',
    add: {
    },
  }, {
    id: '11111111',
    text: 'P1.edges &ni; e',
    add: {
      edges: [
        [findByText(nodes, 'x'), findByText(nodes, 'y')],
      ],
      paths: [
        [findByText(nodes, 'n'), findByText(nodes, 'x')],
        [findByText(nodes, 'y'), findByText(nodes, 'm')],
      ],
    },
    remove: {
      paths: [
        [findByText(nodes, 'n'), findByText(nodes, 'm')],
      ],
    }
  }, {
    id: '111111111',
    text: 'P2.edges &#8716; e',
    add: {
    },
  }, {
    id: '1111111111',
    text: 'e = {x, y}',
    add: {
      nodes: [
        findByText(nodes, 'x'),
        findByText(nodes, 'y'),
      ],
    },
  }, {
    id: '11111111111',
    text: 'graphs.connected &ni; P1 &#8746; P2 - e',
    remove: {
      edges: [
        [findByText(nodes, 'x'), findByText(nodes, 'y')],
      ],
    },
  }, {
    id: '111111111111',
    text: '(P1 &#8746; P2 - e).paths.(ends = {x, y}) &ni; P',
    add: {
    },
  }, {
    id: '1111111111111',
    text: 'graphs.(&ni; cycle) &ni; P + e',
    add: {
      edges: [
        [findByText(nodes, 'x'), findByText(nodes, 'y')],
      ],
    },
  }, {
    id: '11111111111111',
    text: 'contradiction',
    add: {
    },
  }];

  return proof;
};

const getProof4 = () => {
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
    text: `graphs.trees ${HAS} G ${AND}${SO} G.nodes.# ${GE} 2 ${AND}${SO}${SO} ... ${AND}${SO}${SO}${SO} G.leafs.# ${GE} 2`,
  }, {
    id: '11',
    text: `graphs.connected ${HAS} G`,
    add: {
    },
  }, {
    id: '111',
    text: `G.nodes.# ${GE} 2`,
    add: {
      nodes: [
        findByText(nodes, 'n'),
        findByText(nodes, 'm'),
      ],
    },
  }, {
    id: '1111',
    text: `G.edges ${NOTEQ} {}`,
    add: {
      edges: [
        [findByText(nodes, 'n'), findByText(nodes, 'm')],
      ],
    },
  }, {
    id: '11111',
    text: `graphs.${NOT}cyclic ${HAS} G`,
  }, {
    id: '111111',
    text: `G.paths.maximal ${HAS} P`,
  }, {
    id: '1111111',
    text: `P ${HAS} P.ends.neighbors`,
  }, {
    id: '11111111',
    text: `P ${NOTEQ} {}`,
  }, {
    id: '111111111',
    text: `G\P !${HAS} P.ends.neighbors`,
  }, {
    id: '1111111111',
    text: `G.leafs ${HAS} P.ends`,
  }];

  return proof;
};
