const getPos = pos => {
  return pos * 50;
};

const findByText = (node, text) => {
  return node.find(n => n.text === text);
}

const getProof = () => {
  const nodes = [{
    text: 'n',
    x: getPos(3),
    y: getPos(2),
  }, {
    text: 'n1',
    x: getPos(1),
    y: getPos(1),
  }, {
    text: 'n2',
    x: getPos(5),
    y: getPos(1),
  }, {
    text: 'n3',
    x: getPos(3),
    y: getPos(3),
  }, {
    text: 'n31',
    x: getPos(1),
    y: getPos(4),
  }, {
    text: 'n32',
    x: getPos(5),
    y: getPos(4),
  }];

  const proof = [{
    id: '1',
    text: 'graphs.regular.3 &ni; G<br />&nbsp; ...<br />&nbsp; &nbsp; G.connectivity.node = G.connectivity.edge',
  }, {
    id: '11',
    text: 'G.nodes &ni; n',
    drawing: {
      nodes: [
        findByText(nodes, 'n'),
      ],
    },
  }, {
    id: '111',
    text: 'n.neighbors &ni; n1<br />&nbsp; n.neighbors &ni; n2<br />&nbsp; &nbsp; n.neighbors &ni; n3',
    drawing: {
      nodes: [
        findByText(nodes, 'n'),
        findByText(nodes, 'n1'),
        findByText(nodes, 'n2'),
        findByText(nodes, 'n3'),
      ],

      edges: [
        [findByText(nodes, 'n'), findByText(nodes, 'n1')],
        [findByText(nodes, 'n'), findByText(nodes, 'n2')],
        [findByText(nodes, 'n'), findByText(nodes, 'n3')],
      ],
    },
  }, {
    id: '1111',
    text: 'H2 &ni; n2<br />&nbsp; H1 &ni; n1',
    drawing: {
      nodes: [
        findByText(nodes, 'n'),
        findByText(nodes, 'n1'),
        findByText(nodes, 'n2'),
        findByText(nodes, 'n3'),
      ],

      edges: [
        [findByText(nodes, 'n'), findByText(nodes, 'n1')],
        [findByText(nodes, 'n'), findByText(nodes, 'n2')],
        [findByText(nodes, 'n'), findByText(nodes, 'n3')],
      ],

      sets: [{
        text: 'H1',
        nodes: [
          findByText(nodes, 'n1'),
        ],
      }, {
        text: 'H2',
        nodes: [
          findByText(nodes, 'n2'),
        ],
      }],
    },
  }, {
    id: '11111',
    text: 'H1 &ni; n3',
    drawing: {
      nodes: [
        findByText(nodes, 'n'),
        findByText(nodes, 'n1'),
        findByText(nodes, 'n2'),
        findByText(nodes, 'n3'),
      ],

      edges: [
        [findByText(nodes, 'n'), findByText(nodes, 'n1')],
        [findByText(nodes, 'n'), findByText(nodes, 'n2')],
        [findByText(nodes, 'n'), findByText(nodes, 'n3')],
      ],

      sets: [{
        text: 'H1',
        nodes: [
          findByText(nodes, 'n1'),
          findByText(nodes, 'n3'),
        ],
      }, {
        text: 'H2',
        nodes: [
          findByText(nodes, 'n2'),
        ],
      }],
    },
  }, {
    id: '11112',
    text: 'H2 &ni; n3',
    drawing: {
      nodes: [
        findByText(nodes, 'n'),
        findByText(nodes, 'n1'),
        findByText(nodes, 'n2'),
        findByText(nodes, 'n3'),
      ],

      edges: [
        [findByText(nodes, 'n'), findByText(nodes, 'n1')],
        [findByText(nodes, 'n'), findByText(nodes, 'n2')],
        [findByText(nodes, 'n'), findByText(nodes, 'n3')],
      ],

      sets: [{
        text: 'H1',
        nodes: [
          findByText(nodes, 'n1'),
        ],
      }, {
        text: 'H2',
        nodes: [
          findByText(nodes, 'n2'),
          findByText(nodes, 'n3'),
        ],
      }],
    },
  }, {
    id: '11113',
    text: 'H3 &ni; n3',
    drawing: {
      nodes: [
        findByText(nodes, 'n'),
        findByText(nodes, 'n1'),
        findByText(nodes, 'n2'),
        findByText(nodes, 'n3'),
      ],

      edges: [
        [findByText(nodes, 'n'), findByText(nodes, 'n1')],
        [findByText(nodes, 'n'), findByText(nodes, 'n2')],
        [findByText(nodes, 'n'), findByText(nodes, 'n3')],
      ],

      sets: [{
        text: 'H1',
        nodes: [
          findByText(nodes, 'n1'),
        ],
      }, {
        text: 'H2',
        nodes: [
          findByText(nodes, 'n2'),
        ],
      }, {
        text: 'H3',
        nodes: [
          findByText(nodes, 'n3'),
        ],
      }],
    },
  }, {
    id: '11114',
    text: 'S &ni; n3',
    drawing: {
      nodes: [
        findByText(nodes, 'n'),
        findByText(nodes, 'n1'),
        findByText(nodes, 'n2'),
        findByText(nodes, 'n3'),
      ],

      edges: [
        [findByText(nodes, 'n'), findByText(nodes, 'n1')],
        [findByText(nodes, 'n'), findByText(nodes, 'n2')],
        [findByText(nodes, 'n'), findByText(nodes, 'n3')],
      ],

      sets: [{
        text: 'H1',
        nodes: [
          findByText(nodes, 'n1'),
        ],
      }, {
        text: 'H2',
        nodes: [
          findByText(nodes, 'n2'),
        ],
      }],
    },
  }, {
    id: '11115',
    text: '&or;<br /><p>&nbsp; S\'.# = S.#<br />&nbsp; &nbsp; &nbsp; G.connectivity.node = G.connectivity.edge',
  }, {
    id: '111111',
    text: 'graphs.&not;connected &ni; G - {{n, n2}}',
    drawing: {
      nodes: [
        findByText(nodes, 'n'),
        findByText(nodes, 'n1'),
        findByText(nodes, 'n2'),
        findByText(nodes, 'n3'),
      ],

      edges: [
        [findByText(nodes, 'n'), findByText(nodes, 'n1')],
        [findByText(nodes, 'n'), findByText(nodes, 'n3')],
      ],

      sets: [{
        text: 'H1',
        nodes: [
          findByText(nodes, 'n1'),
          findByText(nodes, 'n3'),
        ],
      }, {
        text: 'H2',
        nodes: [
          findByText(nodes, 'n2'),
        ],
      }],
    },
  }, {
    id: '111121',
    text: 'graphs.&not;connected &ni; G - {{n, n1}}',
    drawing: {
      nodes: [
        findByText(nodes, 'n'),
        findByText(nodes, 'n1'),
        findByText(nodes, 'n2'),
        findByText(nodes, 'n3'),
      ],

      edges: [
        [findByText(nodes, 'n'), findByText(nodes, 'n2')],
        [findByText(nodes, 'n'), findByText(nodes, 'n3')],
      ],

      sets: [{
        text: 'H1',
        nodes: [
          findByText(nodes, 'n1'),
        ],
      }, {
        text: 'H2',
        nodes: [
          findByText(nodes, 'n2'),
          findByText(nodes, 'n3'),
        ],
      }],
    },
  }, {
    id: '111131',
    text: 'graphs.&not;connected &ni; G - {{n, n1}}',
    drawing: {
      nodes: [
        findByText(nodes, 'n'),
        findByText(nodes, 'n1'),
        findByText(nodes, 'n2'),
        findByText(nodes, 'n3'),
      ],

      edges: [
        [findByText(nodes, 'n'), findByText(nodes, 'n2')],
        [findByText(nodes, 'n'), findByText(nodes, 'n3')],
      ],

      sets: [{
        text: 'H1',
        nodes: [
          findByText(nodes, 'n1'),
        ],
      }, {
        text: 'H2',
        nodes: [
          findByText(nodes, 'n2'),
        ],
      }, {
        text: 'H3',
        nodes: [
          findByText(nodes, 'n3'),
        ],
      }],
    },
  }, {
    id: '111132',
    text: 'graphs.&not;connected &ni; G - {{n, n2}}',
    drawing: {
      nodes: [
        findByText(nodes, 'n'),
        findByText(nodes, 'n1'),
        findByText(nodes, 'n2'),
        findByText(nodes, 'n3'),
      ],

      edges: [
        [findByText(nodes, 'n'), findByText(nodes, 'n1')],
        [findByText(nodes, 'n'), findByText(nodes, 'n3')],
      ],

      sets: [{
        text: 'H1',
        nodes: [
          findByText(nodes, 'n1'),
        ],
      }, {
        text: 'H2',
        nodes: [
          findByText(nodes, 'n2'),
        ],
      }, {
        text: 'H3',
        nodes: [
          findByText(nodes, 'n3'),
        ],
      }],
    },
  }, {
    id: '111133',
    text: 'graphs.&not;connected &ni; G - {{n, n3}}',
    drawing: {
      nodes: [
        findByText(nodes, 'n'),
        findByText(nodes, 'n1'),
        findByText(nodes, 'n2'),
        findByText(nodes, 'n3'),
      ],

      edges: [
        [findByText(nodes, 'n'), findByText(nodes, 'n1')],
        [findByText(nodes, 'n'), findByText(nodes, 'n2')],
      ],

      sets: [{
        text: 'H1',
        nodes: [
          findByText(nodes, 'n1'),
        ],
      }, {
        text: 'H2',
        nodes: [
          findByText(nodes, 'n2'),
        ],
      }, {
        text: 'H3',
        nodes: [
          findByText(nodes, 'n3'),
        ],
      }],
    },
  }, {
    id: '111141',
    text: 'n3.neighbors &ni; n31<br />&nbsp; n3.neighbors &ni; n32',
    drawing: {
      nodes: [
        findByText(nodes, 'n'),
        findByText(nodes, 'n1'),
        findByText(nodes, 'n2'),
        findByText(nodes, 'n3'),
        findByText(nodes, 'n31'),
        findByText(nodes, 'n32'),
      ],

      edges: [
        [findByText(nodes, 'n'), findByText(nodes, 'n1')],
        [findByText(nodes, 'n'), findByText(nodes, 'n2')],
        [findByText(nodes, 'n'), findByText(nodes, 'n3')],
        [findByText(nodes, 'n3'), findByText(nodes, 'n31')],
        [findByText(nodes, 'n3'), findByText(nodes, 'n32')],
      ],

      sets: [{
        text: 'H1',
        nodes: [
          findByText(nodes, 'n1'),
        ],
      }, {
        text: 'H2',
        nodes: [
          findByText(nodes, 'n2'),
        ],
      }],
    },
  }, {
    id: '1111411',
    text: 'H1 &ni; n31<br />&nbsp; H2 &ni; n32',
    drawing: {
      nodes: [
        findByText(nodes, 'n'),
        findByText(nodes, 'n1'),
        findByText(nodes, 'n2'),
        findByText(nodes, 'n3'),
        findByText(nodes, 'n31'),
        findByText(nodes, 'n32'),
      ],

      edges: [
        [findByText(nodes, 'n'), findByText(nodes, 'n1')],
        [findByText(nodes, 'n'), findByText(nodes, 'n2')],
        [findByText(nodes, 'n'), findByText(nodes, 'n3')],
        [findByText(nodes, 'n3'), findByText(nodes, 'n31')],
        [findByText(nodes, 'n3'), findByText(nodes, 'n32')],
      ],

      sets: [{
        text: 'H1',
        nodes: [
          findByText(nodes, 'n1'),
          findByText(nodes, 'n31'),
        ],
      }, {
        text: 'H2',
        nodes: [
          findByText(nodes, 'n2'),
          findByText(nodes, 'n32'),
        ],
      }],
    },
  }, {
    id: '11114111',
    text: 'graphs.&not;connected &ni; G - {{n, n1}, {n, n31}}',
    drawing: {
      nodes: [
        findByText(nodes, 'n'),
        findByText(nodes, 'n1'),
        findByText(nodes, 'n2'),
        findByText(nodes, 'n3'),
        findByText(nodes, 'n31'),
        findByText(nodes, 'n32'),
      ],

      edges: [
        [findByText(nodes, 'n'), findByText(nodes, 'n2')],
        [findByText(nodes, 'n'), findByText(nodes, 'n3')],
        [findByText(nodes, 'n3'), findByText(nodes, 'n32')],
      ],

      sets: [{
        text: 'H1',
        nodes: [
          findByText(nodes, 'n1'),
          findByText(nodes, 'n31'),
        ],
      }, {
        text: 'H2',
        nodes: [
          findByText(nodes, 'n2'),
          findByText(nodes, 'n32'),
        ],
      }],
    },
  }, {
    id: '11114111',
    text: 'graphs.&not;connected &ni; G - {{n, n2}, {n, n32}}',
    drawing: {
      nodes: [
        findByText(nodes, 'n'),
        findByText(nodes, 'n1'),
        findByText(nodes, 'n2'),
        findByText(nodes, 'n3'),
        findByText(nodes, 'n31'),
        findByText(nodes, 'n32'),
      ],

      edges: [
        [findByText(nodes, 'n'), findByText(nodes, 'n1')],
        [findByText(nodes, 'n'), findByText(nodes, 'n3')],
        [findByText(nodes, 'n3'), findByText(nodes, 'n31')],
      ],

      sets: [{
        text: 'H1',
        nodes: [
          findByText(nodes, 'n1'),
          findByText(nodes, 'n31'),
        ],
      }, {
        text: 'H2',
        nodes: [
          findByText(nodes, 'n2'),
          findByText(nodes, 'n32'),
        ],
      }],
    },
  }];

  return proof;
};
