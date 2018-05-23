const NODE_RADIUS = 30;

const printHave = () => {
  const def1 = [{
    id: '0',
    text: 'graphs &ni; G<br />&nbsp; G.nodes &ni; n<br />&nbsp; &nbsp; n.neighbors',
  }, {
    id: '01',
    text: 'graphs &ni; G<br />&nbsp; G.nodes &ni; n<br />&nbsp; &nbsp; G.edges.(&ni; n) &ni; e <br />&nbsp; &nbsp; &nbsp; n.neighbors = n.neighbors &cup; {e \ n}',
  }];
  const def2 = [{
    id: '0',
    text: 'graphs.regular.k &ni; G',
  }, {
    id: '01',
    text: 'graphs &ni; G<br />&nbsp; G.nodes &ni; n<br />&nbsp; &nbsp; n.neighbors.# = k',
  }];
  const def3 = [{
    id: '0',
    text: 'G.edges &ni; e<br />&nbsp; graphs.&not;connected &ni; G - {e}',
  }, {
    id: '01',
    text: 'e.nodes &ni; n<br />&nbsp; graphs.&not;connected &ni; G - {n}',
  }];
  const def4 = [{
    id: '0',
    text: 'G.nodes &supe; S<br />&nbsp; graphs.&not;connected &ni; G - S',
  }, {
    id: '01',
    text: '&nbsp; &nbsp; (G - S).components.# &gt; 1<br />&nbsp; &nbsp; &nbsp; (G - S).components &ni; H1<br />&nbsp; &nbsp; &nbsp; (G - S).components &ni; H2<br />&nbsp; &nbsp; &nbsp; &and;',
  }];

  const haveEl = document.getElementById('have');
  haveEl.appendChild(printTree(arrayToTree(def1)));
  haveEl.appendChild(printTree(arrayToTree(def2)));
  haveEl.appendChild(printTree(arrayToTree(def3)));
  haveEl.appendChild(printTree(arrayToTree(def4)));
};

const printWant = () => {
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
  const proof1 = [{
    id: '0',
    text: 'graphs.regular.3 &ni; G<br />&nbsp; ...<br />&nbsp; &nbsp; G.connectivity.node = G.connectivity.edge',
  }, {
    id: '01',
    text: 'G.nodes &supe; S<br />&nbsp; S &ni; n<br />&nbsp; &nbsp; n.neighbors &ni; n1<br />&nbsp; &nbsp; &nbsp; H1 &ni; n1<br />&nbsp; &nbsp; &nbsp; &nbsp; n.neighbors &ni; n2<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; H2 &ni; n2<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; n.neighbors &ni; n3',
  }, {
    id: '011',
    text: 'H1 &ni; n3',
  }, {
    id: '012',
    text: 'H2 &ni; n3',
  }, {
    id: '013',
    text: 'H3 &ni; n3',
  }, {
    id: '014',
    text: 'S &ni; n3',
  }, {
    id: '015',
    text: '&or;<br /><p>&nbsp; S\'.# = S.#<br />&nbsp; &nbsp; &nbsp; G.connectivity.node = G.connectivity.edge',
  }, {
    id: '0111',
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
  }, {
    id: '0121',
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
  }, {
    id: '0131',
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
  }, {
    id: '0141',
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
  }];

  const wantEl = document.getElementById('want');
  wantEl.appendChild(printTree(arrayToTree(proof1), message => {
    document.getElementById('screen').contentWindow.postMessage(message, '*');
  }));
};

const main = () => {
  printHave();
  printWant();
};
