const NODE_RADIUS = 30;

const printHave = () => {
  var haveEl = document.getElementById('have');

  const def1 = {
    text: 'graphs &ni; G<br />&nbsp; G.nodes &ni; n<br />&nbsp; &nbsp; n.neighbors',
  };
  const def11 = {
    text: 'graphs &ni; G<br />&nbsp; G.nodes &ni; n<br />&nbsp; &nbsp; G.edges.(&ni; n) &ni; e <br />&nbsp; &nbsp; &nbsp; n.neighbors = n.neighbors &cup; {e \ n}',
  };
  var have1 = new Tree(def1);
  have1.add(def11, def1, have1.traverseBF);
  haveEl.appendChild(printTree(have1));

  const def2 = {
    text: 'graphs.regular.k &ni; G',
  };
  const def21 = {
    text: 'graphs &ni; G<br />&nbsp; G.nodes &ni; n<br />&nbsp; &nbsp; n.neighbors.# = k',
  };
  var have2 = new Tree(def2);
  have2.add(def21, def2, have2.traverseBF);
  haveEl.appendChild(printTree(have2));

  const def3 = {
    text: 'G.edges &ni; e<br />&nbsp; graphs.&not;connected &ni; G - {e}',
  };
  const def31 = {
    text: 'e.nodes &ni; n<br />&nbsp; graphs.&not;connected &ni; G - {n}',
  };
  var have3 = new Tree(def3);
  have3.add(def31, def3, have3.traverseBF);
  haveEl.appendChild(printTree(have3));

  const def4 = {
    text: 'G.nodes &supe; S<br />&nbsp; graphs.&not;connected &ni; G - S',
  };
  const def41 = {
    text: '&nbsp; &nbsp; (G - S).components.# &gt; 1<br />&nbsp; &nbsp; &nbsp; (G - S).components &ni; H1<br />&nbsp; &nbsp; &nbsp; (G - S).components &ni; H2<br />&nbsp; &nbsp; &nbsp; &and;',
  };
  var have4 = new Tree(def4);
  have4.add(def41, def4, have4.traverseBF);
  haveEl.appendChild(printTree(have4));
};

const printWant = () => {
  var wantEl = document.getElementById('want');

  const proof31Nodes = [{
    text: 'n1',
    radius: NODE_RADIUS,
    x: 50,
    y: 25,
  }, {
    text: 'n3',
    radius: NODE_RADIUS,
    x: 50,
    y: 75,
  }, {
    text: 'n',
    radius: NODE_RADIUS,
    x: 150,
    y: 50,
  }, {
    text: 'n2',
    radius: NODE_RADIUS,
    x: 250,
    y: 50,
  }];

  const proof32Nodes = [{
    text: 'n1',
    radius: NODE_RADIUS,
    x: 50,
    y: 50,
  }, {
    text: 'n',
    radius: NODE_RADIUS,
    x: 150,
    y: 50,
  }, {
    text: 'n2',
    radius: NODE_RADIUS,
    x: 250,
    y: 25,
  }, {
    text: 'n3',
    radius: NODE_RADIUS,
    x: 250,
    y: 75,
  }];

  const proof33Nodes = [{
    text: 'n1',
    radius: NODE_RADIUS,
    x: 50,
    y: 50,
  }, {
    text: 'n',
    radius: NODE_RADIUS,
    x: 150,
    y: 50,
  }, {
    text: 'n2',
    radius: NODE_RADIUS,
    x: 250,
    y: 50,
  }, {
    text: 'n3',
    radius: NODE_RADIUS,
    x: 150,
    y: 150,
  }];

  const proof34Nodes = [{
    text: 'n1',
    radius: NODE_RADIUS,
    x: 50,
    y: 25,
  }, {
    text: 'n',
    radius: NODE_RADIUS,
    x: 150,
    y: 25,
  }, {
    text: 'n2',
    radius: NODE_RADIUS,
    x: 250,
    y: 25,
  }, {
    text: 'n31',
    radius: NODE_RADIUS,
    x: 50,
    y: 75,
  }, {
    text: 'n3',
    radius: NODE_RADIUS,
    x: 150,
    y: 75,
  }, {
    text: 'n32',
    radius: NODE_RADIUS,
    x: 250,
    y: 75,
  }];

  const root = {
    text: 'graphs.regular.3 &ni; G<br />&nbsp; ...<br />&nbsp; &nbsp; G.connectivity.node = G.connectivity.edge',
  };
  const proof1 = {
    text: 'G.nodes &supe; S<br />&nbsp; S &ni; n<br />&nbsp; &nbsp; n.neighbors &ni; n1<br />&nbsp; &nbsp; &nbsp; H1 &ni; n1<br />&nbsp; &nbsp; &nbsp; &nbsp; n.neighbors &ni; n2<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; H2 &ni; n2<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; n.neighbors &ni; n3',
  };
  const proof21 = {
    text: 'H1 &ni; n3',
  };
  const proof22 = {
    text: 'H2 &ni; n3',
  };
  const proof23 = {
    text: 'H3 &ni; n3',
  };
  const proof24 = {
    text: 'S &ni; n3',
  };
  const proof25 = {
    text: '&or;<br /><p>&nbsp; S\'.# = S.#<br />&nbsp; &nbsp; &nbsp; G.connectivity.node = G.connectivity.edge',
  };
  const proof31 = {
    text: '&nbsp; graphs.&not;connected &ni; G - {{n, n2}}',
    drawing: {
      nodes: proof31Nodes,

      edges: [
        [proof31Nodes[0], proof31Nodes[2]],
        [proof31Nodes[1], proof31Nodes[2]],
        [proof31Nodes[2], proof31Nodes[3]],
      ],

      sets: [{
        text: 'H1',
        w: 3 * NODE_RADIUS,
        h: 5 * NODE_RADIUS,
        x: 50,
        y: 50,
      }, {
        text: 'H2',
        w: 3 * NODE_RADIUS,
        h: 5 * NODE_RADIUS,
        x: 250,
        y: 50,
      }],
    },
  };
  const proof32 = {
    text: '&nbsp; graphs.&not;connected &ni; G - {{n, n1}}',
    drawing: {
      nodes: proof32Nodes,

      edges: [
        [proof32Nodes[0], proof32Nodes[1]],
        [proof32Nodes[1], proof32Nodes[2]],
        [proof32Nodes[1], proof32Nodes[3]],
      ],

      sets: [{
        text: 'H1',
        w: 3 * NODE_RADIUS,
        h: 5 * NODE_RADIUS,
        x: 50,
        y: 50,
      }, {
        text: 'H2',
        w: 3 * NODE_RADIUS,
        h: 5 * NODE_RADIUS,
        x: 250,
        y: 50,
      }],
    },
  };
  const proof33 = {
    text: '&nbsp; graphs.&not;connected &ni; G - {{n, n1}}<br />&nbsp; graphs.&not;connected &ni; G - {{n, n2}}<br />&nbsp; graphs.&not;connected &ni; G - {{n, n3}}<br />&nbsp; &or;',
    drawing: {
      nodes: proof33Nodes,

      edges: [
        [proof33Nodes[0], proof33Nodes[1]],
        [proof33Nodes[1], proof33Nodes[2]],
        [proof33Nodes[1], proof33Nodes[3]],
      ],

      sets: [{
        text: 'H1',
        w: 3 * NODE_RADIUS,
        h: 5 * NODE_RADIUS,
        x: 50,
        y: 50,
      }, {
        text: 'H2',
        w: 3 * NODE_RADIUS,
        h: 5 * NODE_RADIUS,
        x: 250,
        y: 50,
      }, {
        text: 'H3',
        w: 3 * NODE_RADIUS,
        h: 5 * NODE_RADIUS,
        x: 150,
        y: 200,
      }],
    },
  };
  const proof34 = {
    text: '&nbsp; n3.neighbors &ni; n31<br />&nbsp; &nbsp; H1 &ni; n31<br />&nbsp; &nbsp; &nbsp; n3.neighbors &ni; n32<br />&nbsp; &nbsp; &nbsp; &nbsp; H2 &ni; n32<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; graphs.&not;connected &ni; G - {{n, n1}, {n3, n31}}<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; graphs.&not;connected &ni; G - {{n, n2}, {n3, n32}}<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &or;',
    drawing: {
      nodes: proof34Nodes,

      edges: [
        [proof34Nodes[0], proof34Nodes[1]],
        [proof34Nodes[1], proof34Nodes[2]],
        [proof34Nodes[3], proof34Nodes[4]],
        [proof34Nodes[4], proof34Nodes[5]],
        [proof34Nodes[1], proof34Nodes[4]],
      ],

      sets: [{
        text: 'H1',
        w: 3 * NODE_RADIUS,
        h: 5 * NODE_RADIUS,
        x: 50,
        y: 50,
      }, {
        text: 'H2',
        w: 3 * NODE_RADIUS,
        h: 5 * NODE_RADIUS,
        x: 250,
        y: 50,
      }],
    },
  };
  var want = new Tree(root);
  want.add(proof1, root, want.traverseBF);
  want.add(proof21, proof1, want.traverseBF);
  want.add(proof22, proof1, want.traverseBF);
  want.add(proof23, proof1, want.traverseBF);
  want.add(proof24, proof1, want.traverseBF);
  want.add(proof25, proof1, want.traverseBF);
  want.add(proof31, proof21, want.traverseBF);
  want.add(proof32, proof22, want.traverseBF);
  want.add(proof33, proof23, want.traverseBF);
  want.add(proof34, proof24, want.traverseBF);
  wantEl.appendChild(printTree(want, message => {
    document.getElementById('screen').contentWindow.postMessage(message, '*');
  }));
};

const main = () => {
  printHave();
  printWant();
};
