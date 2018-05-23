// input: array with:
//  each cell representing tree node with:
//   id: string
//   text: string
//   drawing: object
//  1st cell representing tree root
// output: tree
const arrayToTree = arr => {
  let tree;

  arr.forEach((node, i) => {
    if (i === 0) {
      tree = new Tree(node);
    } else {
      // parent id is the whole string except the last character
      // the last character represents the child
      const parentId = node.id.substring(0, node.id.length - 1);

      let parentNode;
      tree.traverseBF(currentTree => {
        if (currentTree.data.id === parentId) {
          parentNode = currentTree;
        }
      });

      tree.add(node, parentNode.data, tree.traverseBF);
    }
  });

  return tree;
};
