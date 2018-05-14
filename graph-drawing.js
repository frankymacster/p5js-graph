// class to hold data for graph
// INPUTS
// nodes array
// edges array

class GraphDrawing {
  constructor(nodes, edges) {
    this.nodes = nodes;
    this.edges = edges;
    this.sets = [];
  }

  addSet(set) {
    this.sets.push(set);
  }

  draw() {
    stroke('red');
    strokeWeight(4);
    for (var i = 0; i < this.edges.length; i++) {
      line(this.edges[i][0].x, this.edges[i][0].y, this.edges[i][1].x, this.edges[i][1].y);
    }

    strokeWeight(0);
    fill(255, 204, 0);
    for (var i = 0; i < this.nodes.length; i++) {
      ellipse(this.nodes[i].x, this.nodes[i].y, this.nodes[i].radius, this.nodes[i].radius);
    }

    fill('white');
    var TEXT_SIZE = 16;
    textSize(TEXT_SIZE);
    for (var i = 0; i < this.nodes.length; i++) {
      text(this.nodes[i].text, this.nodes[i].x - TEXT_SIZE / 4, this.nodes[i].y + TEXT_SIZE / 4);
    }

    fill('blue');
    for (var i = 0; i < this.sets.length; i++) {
      ellipse(this.sets[i].x, this.sets[i].y, this.sets[i].w, this.sets[i].h);
    }

    fill('white');
    textSize(TEXT_SIZE);
    for (var i = 0; i < this.sets.length; i++) {
      text(this.sets[i].text, this.sets[i].x - TEXT_SIZE / 2, this.sets[i].y + TEXT_SIZE / 4);
    }
  }
}
