// class to hold data for graph
// INPUTS
// nodes array
// edges array
const NODE_RADIUS = 30;
const TEXT_SIZE = 16;

// https://stackoverflow.com/questions/1484506/random-color-generator
const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

class GraphDrawing {
  constructor(nodes, edges) {
    this.nodes = nodes;
    this.edges = edges;
    this.sets = [];
  }

  addSet(set) {
    set.color = getRandomColor();
    this.sets.push(set);
  }

  draw() {
    stroke('red');
    strokeWeight(4);
    for (let i = 0; i < this.edges.length; i++) {
      line(this.edges[i][0].x, this.edges[i][0].y, this.edges[i][1].x, this.edges[i][1].y);
    }
    strokeWeight(0);

    for (let i = 0; i < this.sets.length; i++) {
      fill(this.sets[i].color);
      for (let j = 0; j < this.sets[i].nodes.length; j++) {
        ellipse(this.sets[i].nodes[j].x, this.sets[i].nodes[j].y, NODE_RADIUS * 1.5, NODE_RADIUS * 1.5);
      }
    }

    fill(255, 204, 0);
    for (let i = 0; i < this.nodes.length; i++) {
      ellipse(this.nodes[i].x, this.nodes[i].y, NODE_RADIUS, NODE_RADIUS);
    }

    fill('white');
    textSize(TEXT_SIZE);
    for (let i = 0; i < this.nodes.length; i++) {
      text(this.nodes[i].text, this.nodes[i].x - TEXT_SIZE / 4, this.nodes[i].y + TEXT_SIZE / 4);
    }

    // fill('white');
    // textSize(TEXT_SIZE);
    // for (var i = 0; i < this.sets.length; i++) {
    //   text(this.sets[i].text, this.sets[i].x - TEXT_SIZE / 2, this.sets[i].y + TEXT_SIZE / 4);
    // }
  }
}
