const NODE_RADIUS = 30;

const main = () => {
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
