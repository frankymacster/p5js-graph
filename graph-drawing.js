// class to hold data for graph
// INPUTS
// nodes array
// edges array
const NODE_RADIUS = 30;
const TEXT_SIZE = 16;

const dottedLine = (x1, y1, x2, y2, amount, radius) => {
  let distX = x2 - x1;
  let distY = y2 - y1;
  for (let i = 0; i < amount; i++) {
    ellipse(x1 + i * distX / amount, y1 + i * distY / amount, radius, radius);
  }
};

class GraphDrawing {
  constructor(nodes, edges) {
    this.nodes = nodes;
    this.edges = edges;
    this.sets = [];
    this.paths = [];
  }

  addSet(set) {
    this.sets.push(set);
  }

  addPath(path) {
    path.color = getRandomColor();
    this.paths.push(path);
  }

  draw() {
    if (this.edges) {
      stroke('red');
      strokeWeight(4);
      for (let i = 0; i < this.edges.length; i++) {
        line(this.edges[i][0].x, this.edges[i][0].y, this.edges[i][1].x, this.edges[i][1].y);
      }
      strokeWeight(0);
    }

    if (this.paths) {
      for (let i = this.paths.length - 1; i >= 0; i--) {
        fill(this.paths[i].color);
        let amount;
        let radius;
        if (this.paths.find((p, j) => p[0].text === this.paths[i][0].text && p[1].text === this.paths[i][1].text && j !== i) ||
          this.paths.find((p, j) => p[0].text === this.paths[i][1].text && p[1].text === this.paths[i][0].text && j !== i)) {
          amount = 3 * (this.paths.length - (i - 1));
          radius = 6 + i * 4;
        } else {
          amount = 3;
          radius = 6;
        }
        dottedLine(this.paths[i][0].x, this.paths[i][0].y, this.paths[i][1].x, this.paths[i][1].y, amount, radius);
      }
    }

    if (this.sets) {
      for (let i = 0; i < this.sets.length; i++) {
        fill(this.sets[i].color);
        for (let j = 0; j < this.sets[i].nodes.length; j++) {
          ellipse(this.sets[i].nodes[j].x, this.sets[i].nodes[j].y, NODE_RADIUS * 1.5, NODE_RADIUS * 1.5);
        }
      }
    }

    if (this.nodes) {
      fill(255, 204, 0);
      for (let i = 0; i < this.nodes.length; i++) {
        ellipse(this.nodes[i].x, this.nodes[i].y, NODE_RADIUS, NODE_RADIUS);
      }

      fill('white');
      textSize(TEXT_SIZE);
      for (let i = 0; i < this.nodes.length; i++) {
        text(this.nodes[i].text, this.nodes[i].x - TEXT_SIZE / 4, this.nodes[i].y + TEXT_SIZE / 4);
      }
    }

    // fill('white');
    // textSize(TEXT_SIZE);
    // for (var i = 0; i < this.sets.length; i++) {
    //   text(this.sets[i].text, this.sets[i].x - TEXT_SIZE / 2, this.sets[i].y + TEXT_SIZE / 4);
    // }
  }
}
