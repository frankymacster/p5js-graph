let graphDrawing;

function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  background(0);

  if (typeof graphDrawing === 'object') {
    graphDrawing.draw();
  }
}

window.addEventListener('message', e => {
  graphDrawing = new GraphDrawing(e.data.nodes, e.data.edges);

  if (!e.data.sets) {
    return;
  }

  for (let i = 0; i < e.data.sets.length; i++) {
    graphDrawing.addSet(e.data.sets[i]);
  }

  for (let i = 0; i < e.data.paths.length; i++) {
    graphDrawing.addPath(e.data.paths[i]);
  }
});
