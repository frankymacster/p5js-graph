const NODE_RADIUS = 30;

const setTimeoutHandler = () => {
  const case1_nodes = [{
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

  document.getElementById('case1').contentWindow.postMessage({
    nodes: case1_nodes,

    edges: [
      [case1_nodes[0], case1_nodes[2]],
      [case1_nodes[1], case1_nodes[2]],
      [case1_nodes[2], case1_nodes[3]],
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
  }, '*');


  const case2_nodes = [{
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

  document.getElementById('case2').contentWindow.postMessage({
    nodes: case2_nodes,

    edges: [
      [case2_nodes[0], case2_nodes[1]],
      [case2_nodes[1], case2_nodes[2]],
      [case2_nodes[1], case2_nodes[3]],
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
  }, '*');


  const case3_nodes = [{
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

  document.getElementById('case3').contentWindow.postMessage({
    nodes: case3_nodes,

    edges: [
      [case3_nodes[0], case3_nodes[1]],
      [case3_nodes[1], case3_nodes[2]],
      [case3_nodes[1], case3_nodes[3]],
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
  }, '*');


  const case4_nodes = [{
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

  document.getElementById('case4').contentWindow.postMessage({
    nodes: case4_nodes,

    edges: [
      [case4_nodes[0], case4_nodes[1]],
      [case4_nodes[1], case4_nodes[2]],
      [case4_nodes[3], case4_nodes[4]],
      [case4_nodes[4], case4_nodes[5]],
      [case4_nodes[1], case4_nodes[4]],
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
  }, '*');
};

const printHave = () => {
  var haveEl = document.getElementById('have');

  var have1 = new Tree('graphs &ni; G<br />&nbsp; G.nodes &ni; n<br />&nbsp; &nbsp; n.neighbors');

  have1.add('graphs &ni; G<br />&nbsp; G.nodes &ni; n<br />&nbsp; &nbsp; G.edges.(&ni; n) &ni; e <br />&nbsp; &nbsp; &nbsp; n.neighbors = n.neighbors &cup; {e \ n}',
    'graphs &ni; G<br />&nbsp; G.nodes &ni; n<br />&nbsp; &nbsp; n.neighbors', have1.traverseBF);

  haveEl.appendChild(printTree(have1));

  var have2 = new Tree('graphs.regular.k &ni; G');

  have2.add('graphs &ni; G<br />&nbsp; G.nodes &ni; n<br />&nbsp; &nbsp; n.neighbors.# = k',
    'graphs.regular.k &ni; G', have2.traverseBF);

  haveEl.appendChild(printTree(have2));

  var have3 = new Tree('G.edges &ni; e<br />&nbsp; graphs.&not;connected &ni; G - {e}');

  have3.add('e.nodes &ni; n<br />&nbsp; graphs.&not;connected &ni; G - {n}',
    'G.edges &ni; e<br />&nbsp; graphs.&not;connected &ni; G - {e}', have3.traverseBF);

  haveEl.appendChild(printTree(have3));

  var have4 = new Tree('G.nodes &supe; S<br />&nbsp; graphs.&not;connected &ni; G - S');

  have4.add('&nbsp; &nbsp; (G - S).components.# &gt; 1<br />&nbsp; &nbsp; &nbsp; (G - S).components &ni; H1<br />&nbsp; &nbsp; &nbsp; (G - S).components &ni; H2<br />&nbsp; &nbsp; &nbsp; &and;',
    'G.nodes &supe; S<br />&nbsp; graphs.&not;connected &ni; G - S', have4.traverseBF);

  haveEl.appendChild(printTree(have4));
};

const printWant = () => {
  var wantEl = document.getElementById('want');

  var want = new Tree('graphs.regular.3 &ni; G<br />&nbsp; ...<br />&nbsp; &nbsp; G.connectivity.node = G.connectivity.edge');

  want.add('G.nodes &supe; S<br />&nbsp; S &ni; n<br />&nbsp; &nbsp; n.neighbors &ni; n1<br />&nbsp; &nbsp; &nbsp; H1 &ni; n1<br />&nbsp; &nbsp; &nbsp; &nbsp; n.neighbors &ni; n2<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; H2 &ni; n2<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; n.neighbors &ni; n3',
    'graphs.regular.3 &ni; G<br />&nbsp; ...<br />&nbsp; &nbsp; G.connectivity.node = G.connectivity.edge', want.traverseBF);

  want.add('H1 &ni; n3',
    'G.nodes &supe; S<br />&nbsp; S &ni; n<br />&nbsp; &nbsp; n.neighbors &ni; n1<br />&nbsp; &nbsp; &nbsp; H1 &ni; n1<br />&nbsp; &nbsp; &nbsp; &nbsp; n.neighbors &ni; n2<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; H2 &ni; n2<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; n.neighbors &ni; n3', want.traverseBF);
  want.add('H2 &ni; n3',
    'G.nodes &supe; S<br />&nbsp; S &ni; n<br />&nbsp; &nbsp; n.neighbors &ni; n1<br />&nbsp; &nbsp; &nbsp; H1 &ni; n1<br />&nbsp; &nbsp; &nbsp; &nbsp; n.neighbors &ni; n2<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; H2 &ni; n2<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; n.neighbors &ni; n3', want.traverseBF);
  want.add('H3 &ni; n3',
    'G.nodes &supe; S<br />&nbsp; S &ni; n<br />&nbsp; &nbsp; n.neighbors &ni; n1<br />&nbsp; &nbsp; &nbsp; H1 &ni; n1<br />&nbsp; &nbsp; &nbsp; &nbsp; n.neighbors &ni; n2<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; H2 &ni; n2<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; n.neighbors &ni; n3', want.traverseBF);
  want.add('S &ni; n3',
    'G.nodes &supe; S<br />&nbsp; S &ni; n<br />&nbsp; &nbsp; n.neighbors &ni; n1<br />&nbsp; &nbsp; &nbsp; H1 &ni; n1<br />&nbsp; &nbsp; &nbsp; &nbsp; n.neighbors &ni; n2<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; H2 &ni; n2<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; n.neighbors &ni; n3', want.traverseBF);
  want.add('&or;<br /><p>&nbsp; S\'.# = S.#<br />&nbsp; &nbsp; &nbsp; G.connectivity.node = G.connectivity.edge',
    'G.nodes &supe; S<br />&nbsp; S &ni; n<br />&nbsp; &nbsp; n.neighbors &ni; n1<br />&nbsp; &nbsp; &nbsp; H1 &ni; n1<br />&nbsp; &nbsp; &nbsp; &nbsp; n.neighbors &ni; n2<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; H2 &ni; n2<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; n.neighbors &ni; n3', want.traverseBF);

  want.add('<iframe id="case1" src="./drawing/index.html"></iframe><br />&nbsp; graphs.&not;connected &ni; G - {{n, n2}}',
    'H1 &ni; n3', want.traverseBF);
  want.add('<iframe id="case2" src="./drawing/index.html"></iframe><br />&nbsp; graphs.&not;connected &ni; G - {{n, n1}}',
    'H2 &ni; n3', want.traverseBF);
  want.add('<iframe id="case3" src="./drawing/index.html"></iframe><br /><p>&nbsp; graphs.&not;connected &ni; G - {{n, n1}}<br />&nbsp; graphs.&not;connected &ni; G - {{n, n2}}<br />&nbsp; graphs.&not;connected &ni; G - {{n, n3}}<br />&nbsp; &or;',
    'H3 &ni; n3', want.traverseBF);
  want.add('&nbsp; n3.neighbors &ni; n31<br />&nbsp; &nbsp; H1 &ni; n31<br />&nbsp; &nbsp; &nbsp; n3.neighbors &ni; n32<br />&nbsp; &nbsp; &nbsp; &nbsp; H2 &ni; n32<br /><iframe id="case4" src="./drawing/index.html"></iframe><br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; graphs.&not;connected &ni; G - {{n, n1}, {n3, n31}}<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; graphs.&not;connected &ni; G - {{n, n2}, {n3, n32}}<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &or;',
    'S &ni; n3', want.traverseBF);

  wantEl.appendChild(printTree(want));

  setTimeout(setTimeoutHandler, 1000);
};

const main = () => {
  printHave();
  printWant();
};
