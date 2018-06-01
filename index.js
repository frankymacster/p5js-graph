const main = () => {
  const haveEl = document.getElementById('have');
  const definitions = getDefinitions();
  definitions.forEach(d => {
    haveEl.appendChild(printTree(arrayToTree(makeDisplayableProof(d)), message => {
      document.getElementById('screen').contentWindow.postMessage(message, '*');
    }));
  });

  const wantEl = document.getElementById('want');
  wantEl.appendChild(printTree(arrayToTree(makeDisplayableProof(getProof3())), message => {
    document.getElementById('screen').contentWindow.postMessage(message, '*');
  }));
  wantEl.appendChild(printTree(arrayToTree(makeDisplayableProof(getProof())), message => {
    document.getElementById('screen').contentWindow.postMessage(message, '*');
  }));
  wantEl.appendChild(printTree(arrayToTree(makeDisplayableProof(getProof2())), message => {
    document.getElementById('screen').contentWindow.postMessage(message, '*');
  }));
  wantEl.appendChild(printTree(arrayToTree(makeDisplayableProof(getProof4())), message => {
    document.getElementById('screen').contentWindow.postMessage(message, '*');
  }));
};
