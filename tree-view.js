const printTree = tree => {
  let visited = [];
  let cardBodyData;

  tree.traverseDF(currentTree => {
    if (!currentTree.children.length) {
      cardBodyData = document.createElement('p');
      cardBodyData.innerHTML = currentTree.data;
    } else {
      var childCardBodyData = document.createElement('p');

      for (let i = 0; i < visited.length; i++) {
        if (visited[i].tree.parent.data === currentTree.data) {
          childCardBodyData.appendChild(visited[i].element);
          visited[i] = null;
        }
      }

      cardBodyData = createCardContainerEl(currentTree.data, childCardBodyData)
      visited = visited.filter(v => v);
    }

    if (currentTree.parent) {
      visited.push({
        tree: currentTree,
        element: cardBodyData,
      });
    }
  });

  return cardBodyData;
};
