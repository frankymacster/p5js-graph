const printTree = (tree, cardBodyDataClickCb) => {
  let visited = [];
  let cardBodyData;

  tree.traverseDF(currentTree => {
    if (!currentTree.children.length) {
      cardBodyData = document.createElement('p');
      cardBodyData.innerHTML = currentTree.data.text;
    } else {
      var childCardBodyData = document.createElement('p');

      for (let i = 0; i < visited.length; i++) {
        if (visited[i].tree.parent.data.text === currentTree.data.text) {
          childCardBodyData.appendChild(visited[i].element);
          visited[i] = null;
        }
      }

      cardBodyData = createCardContainerEl(currentTree.data.text, childCardBodyData)
      visited = visited.filter(v => v);
    }

    cardBodyData.addEventListener('click', () => {
      if (!currentTree.data.drawing
        || !cardBodyDataClickCb) {
        return;
      }

      cardBodyDataClickCb(currentTree.data.drawing);
    }, true);

    if (currentTree.parent) {
      visited.push({
        tree: currentTree,
        element: cardBodyData,
      });
    }
  });

  return cardBodyData;
};
