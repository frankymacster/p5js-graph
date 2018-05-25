const findById = (proofs, id) => {
  return proofs.find(n => n.id === id);
}

// input: proof array
// output: displayable proof array
const makeDisplayableProof = proofs => {
  let displayableProofs = [];

  proofs.forEach(p => {
    let displayableProof = {};

    displayableProof.id = p.id;
    displayableProof.text = p.text;
    displayableProof.drawing = {
      nodes: [],
      edges: [],
      sets: [],
    };
    // keep in object text of elements to remove
    let remove = {
      nodes: [],
      edges: [],
      sets: [],
    };
    let drawingId = p.id;
    while (drawingId) {
      let proof = findById(proofs, drawingId);

      for (let prop in displayableProof.drawing) {
        if (proof.add) {
          let src = proof.add[prop];
          if (src) {
            src.forEach(s => {
              if (prop === 'sets') {
                let set = findByText(displayableProof.drawing[prop], s.text) || {
                  text: s.text,
                };

                if (!set.nodes) {
                  set.nodes = [];
                }

                s.nodes.forEach(n => {
                  set.nodes.push(n);
                });

                displayableProof.drawing[prop].push(set);
              } else {
                displayableProof.drawing[prop].push(s);
              }
            });
          }
        }

        if (proof.remove) {
          let src = proof.remove[prop];
          if (src) {
            src.forEach(s => {
              remove[prop].push(s);
            });
          }
        }
      }

      drawingId = drawingId.substring(0, drawingId.length - 1);
    }

    // remove elements from displayableProof
    for (let prop in remove) {
      if (prop === 'edges') {
        remove[prop].forEach(r => {
          let idx = displayableProof.drawing[prop].findIndex(e => {
            return e[0].text === r[0].text &&
              e[1].text === r[1].text;
          });
          displayableProof.drawing[prop].splice(idx, 1);
        });
      }
    }

    displayableProofs.push(displayableProof);
  });

  return displayableProofs;
};
